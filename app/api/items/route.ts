import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Item } from '@/models/Item';

// GET all items or filter by category
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    const query = category ? { category } : {};
    const items = await Item.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}

// POST - Create new item (requires authentication)
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const body = await request.json();
    const item = await Item.create({
      ...body,
      ownerId: userId,
    });

    return NextResponse.json({ item }, { status: 201 });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 }
    );
  }
}