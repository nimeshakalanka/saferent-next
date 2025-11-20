'use client';

import { Star, MapPin } from 'lucide-react';
import { type Item } from '@/lib/saferent/items-data';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all cursor-pointer">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!item.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="px-4 py-2 bg-neutral-900 text-white rounded-lg font-medium">
              Currently Rented
            </span>
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors">
          {item.name}
        </h3>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-medium">{item.rating}</span>
            <span className="text-neutral-400">({item.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-white text-xl font-bold">${item.price}</span>
            <span className="text-neutral-400 text-sm font-normal">/day</span>
          </div>
          {item.available && (
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all">
              Rent Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
