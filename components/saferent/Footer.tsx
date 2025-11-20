import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function SafeRentFooter() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              SafeRent
            </h3>
            <p className="text-gray-400">
              Your trusted platform for renting anything, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-gray-400 hover:text-white transition">
                  Browse Items
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/list-item" className="text-gray-400 hover:text-white transition">
                  List an Item
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/music" className="text-gray-400 hover:text-white transition">
                  Music
                </Link>
              </li>
              <li>
                <Link href="/category/sports" className="text-gray-400 hover:text-white transition">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/category/decoration" className="text-gray-400 hover:text-white transition">
                  Decoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SafeRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}