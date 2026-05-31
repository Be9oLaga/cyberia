'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { navItems, NavItem } from '@/shared/config/navigation';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-unbounded">
          КИБЕРИЯ
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item: NavItem) => (
            <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button variant="primary" size="sm" className="hidden md:block">
          Обсудить проект
        </Button>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Меню">
          <Menu />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold">КИБЕРИЯ</span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Закрыть">
              <X />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-lg">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b pb-2"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="primary" fullWidth className="mt-4">
              Обсудить проект
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};