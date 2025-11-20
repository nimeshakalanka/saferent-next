import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Item } from '@/models/Item';

// GET single item
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const item = await Item.findById(params.id);

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ item });
  } catch (error) {
    console.error('Error fetching item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch item' },
      { status: 500 }
    );
  }
}

// PUT - Update item (owner only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const item = await Item.findById(params.id);

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }

    if (item.ownerId !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const updatedItem = await Item.findByIdAndUpdate(
      params.id,
      { ...body, updatedAt: new Date() },
      { new: true }
    );

    return NextResponse.json({ item: updatedItem });
  } catch (error) {
    console.error('Error updating item:', error);
    return NextResponse.json(
      { error: 'Failed to update item' },
      { status: 500 }
    );
  }
}

// DELETE item (owner only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();

    const item = await Item.findById(params.id);

    if (!item) {
      return NextResponse.json(
        { error: 'Item not found' },
        { status: 404 }
      );
    }

    if (item.ownerId !== userId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    await Item.findByIdAndDelete(params.id);

    return NextResponse.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error('Error deleting item:', error);
    return NextResponse.json(
      { error: 'Failed to delete item' },
      { status: 500 }
    );
  }
}