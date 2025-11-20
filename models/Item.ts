import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['music', 'decoration', 'sports', 'uni', 'video', 'other'],
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  images: [{
    type: String,
  }],
  condition: {
    type: String,
    enum: ['new', 'like-new', 'good', 'fair'],
    default: 'good',
  },
  available: {
    type: Boolean,
    default: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);