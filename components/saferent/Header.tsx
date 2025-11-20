'use client';

import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export function SafeRentHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="border border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md rounded-3xl shadow-sm">
          <div className="flex items-center justify-between h-20 sm:h-24 px-5 sm:px-8">
            
            {/* Logo */}
            <Link href="/" onClick={handleLinkClick} className="flex items-center gap-3">
              <Image
                src="/saferent/SR.svg"
                alt="SafeRent logo"
                width={112}
                height={112}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/browse" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">
                Browse
              </Link>
              <Link href="/list-item" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">
                List Item
              </Link>
              <Link href="/how-it-works" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-md font-medium">
                How it Works
              </Link>
            </div>

            {/* Right: Actions (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              {isSignedIn ? (
                <>
                  <UserButton afterSignOutUrl="/" />
                </>
              ) : (
                <>
                  <Link href="/sign-in" onClick={handleLinkClick}
                    className="px-3 py-2 text-lg font-medium text-neutral-300 hover:text-white transition-colors">
                    Sign In
                  </Link>
                  <Link href="/sign-up" onClick={handleLinkClick} 
                    className="px-3 py-2 text-lg font-medium bg-transparent border border-[#4ECDC4] text-neutral-300 rounded-xl hover:bg-[#4ECDC4] hover:text-white transition-colors duration-300 ease-in-out">
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-neutral-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile drawer */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-neutral-800 px-4 sm:px-6 py-4">
              <div className="flex flex-col gap-4">
                <Link href="/browse" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Browse
                </Link>
                <Link href="/list-item" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  List Item
                </Link>
                <Link href="/how-it-works" onClick={handleLinkClick} className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  How it Works
                </Link>
                
                {isSignedIn ? (
                  <div className="pt-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <div className="flex gap-2 pt-2">
                    <Link href="/sign-in" onClick={handleLinkClick} className="flex-1 px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-800 rounded-lg text-center">
                      Sign In
                    </Link>
                    <Link href="/sign-up" onClick={handleLinkClick} className="flex-1 px-4 py-2 text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all text-center">
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}