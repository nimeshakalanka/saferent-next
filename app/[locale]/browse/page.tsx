import { CategoryCard } from '@/components/saferent/CategoryCard';
import { categories } from '@/lib/saferent/categories';
import { Search } from 'lucide-react';

export default function BrowsePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse All Categories
          </h1>
          <p className="text-gray-400 text-lg">
            Explore our wide range of rental items
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
              itemCount={category.itemCount}
              href={`/category/${category.id}`}
              gradient={category.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}