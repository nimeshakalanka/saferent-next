import mongoose from 'mongoose';

declare global {
  // Allow attaching a mongoose cache to the global object during development/hot-reload
  var mongoose: { conn: any | null; promise: Promise<any> | null } | undefined;
}

const MONGODB_URI = process.env.MONGO_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached!.conn) {
    return cached!.conn;
  }

  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached!.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached!.conn = await cached!.promise;
  } catch (e) {
    cached!.promise = null;
    throw e;
  }

  return cached!.conn;
}

export function getConnectionState() {
  return mongoose.connection.readyState;
}

export async function checkDatabaseHealth(): Promise<{
  status: string;
  message: string;
  details: {
    host: string | undefined;
    readyState: number;
    readyStateName: string;
  };
}> {
  const readyState = mongoose.connection.readyState;
  const readyStateNames = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  
  return {
    status: readyState === 1 ? 'healthy' : 'unhealthy',
    message: readyState === 1 ? 'Database connection is healthy' : 'Database connection is not healthy',
    details: {
      host: mongoose.connection.host,
      readyState,
      readyStateName: readyStateNames[readyState] || 'unknown',
    },
  };
}