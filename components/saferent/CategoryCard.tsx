import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  itemCount: number;
  href: string;
  gradient: string;
}

export function CategoryCard({
  icon: Icon,
  title,
  description,
  itemCount,
  href,
  gradient,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600 cursor-pointer">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="text-white" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{itemCount} items</span>
          <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  );
}