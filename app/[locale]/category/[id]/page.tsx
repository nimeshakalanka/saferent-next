'use client';

import { useParams } from 'next/navigation';
import { categories } from '@/lib/saferent/categories';
import { getItemsByCategory } from '@/lib/saferent/items-data';
import { ItemCard } from '@/components/saferent/ItemCard';
import { useState, useEffect } from 'react';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  const [activeFilter, setActiveFilter] = useState<'all' | 'available' | 'price-low' | 'rating'>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categoryId]);

  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return <div>Category not found</div>;
  }

  // Get items from static data
  let items = getItemsByCategory(categoryId);

  // Apply filters
  if (activeFilter === 'available') {
    items = items.filter(item => item.available);
  } else if (activeFilter === 'price-low') {
    items = [...items].sort((a, b) => a.price - b.price);
  } else if (activeFilter === 'rating') {
    items = [...items].sort((a, b) => b.rating - a.rating);
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Category Header */}
        <div className="text-center space-y-4 mb-12">
          <div className={`inline-flex w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} items-center justify-center`}>
            <Icon className="text-white" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            {category.title}
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-emerald-500 text-white'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveFilter('available')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeFilter === 'available'
                ? 'bg-emerald-500 text-white'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            Available Now
          </button>
          <button
            onClick={() => setActiveFilter('price-low')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeFilter === 'price-low'
                ? 'bg-emerald-500 text-white'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            Lowest Price
          </button>
          <button
            onClick={() => setActiveFilter('rating')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              activeFilter === 'rating'
                ? 'bg-emerald-500 text-white'
                : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
            }`}
          >
            Highest Rating
          </button>
        </div>

        {/* Items Count */}
        <p className="text-neutral-400 mb-6 text-center">
          {items.length} {items.length === 1 ? 'item' : 'items'} found
        </p>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}