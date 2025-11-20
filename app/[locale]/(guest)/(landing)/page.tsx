import Link from 'next/link';
import { CategoryCard } from '@/components/saferent/CategoryCard';
import { categories } from '@/lib/saferent/categories';
import { TrendingUp, Shield, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Rent Anything,
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent pb-3.5">
                Anytime, Anywhere
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Explore rentals from music gear to sports tools and project essentials. Find what you need fast, rent anytime easily.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/browse"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-cyan-600 transition-all shadow-lg shadow-emerald-500/20"
              >
                Explore Categories
              </Link>
              <Link
                href="/list-item"
                className="px-8 py-3 bg-neutral-900 text-white rounded-lg font-medium hover:bg-neutral-800 transition-all border border-neutral-800"
              >
                List Your Item
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-medium">Best Prices</h3>
                <p className="text-neutral-400 text-sm text-center">Competitive rates for all items</p>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-medium">Secure Rentals</h3>
                <p className="text-neutral-400 text-sm text-center">Protected transactions & insurance</p>
              </div>
              <div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 backdrop-blur-sm">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-medium">Quick Process</h3>
                <p className="text-neutral-400 text-sm text-center">Rent in minutes, not hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Browse by Category
          </h2>
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
      </section>
    </div>
  );
}


