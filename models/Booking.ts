import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  renterId: {
    type: String,
    required: true,
  },
  renterName: {
    type: String,
    required: true,
  },
  renterEmail: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'active', 'completed', 'cancelled'],
    default: 'pending',
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);