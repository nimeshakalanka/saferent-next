'use client';

import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function SafeRentHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            SafeRent
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-gray-300 hover:text-white transition">
              Browse
            </Link>
            <Link href="/how-it-works" className="text-gray-300 hover:text-white transition">
              How It Works
            </Link>
            {isSignedIn ? (
              <>
                <Link href="/list-item" className="text-gray-300 hover:text-white transition">
                  List Item
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link href="/sign-in" className="text-gray-300 hover:text-white transition">
                  Sign In
                </Link>
                <Link href="/sign-up" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/browse" className="block text-gray-300 hover:text-white transition">
              Browse
            </Link>
            <Link href="/how-it-works" className="block text-gray-300 hover:text-white transition">
              How It Works
            </Link>
            {isSignedIn ? (
              <>
                <Link href="/list-item" className="block text-gray-300 hover:text-white transition">
                  List Item
                </Link>
                <div className="pt-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            ) : (
              <>
                <Link href="/sign-in" className="block text-gray-300 hover:text-white transition">
                  Sign In
                </Link>
                <Link href="/sign-up" className="block text-gray-300 hover:text-white transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}