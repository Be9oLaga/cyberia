'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // npm install lucide-react
import { Button } from '../Button/Button';

const navItems = [
  { label: 'Проекты', href: '/projects' },
  { label: 'Услуги', href: '/services' },
  { label: 'О компании', href: '/about' },
  { label: 'Карьера', href: '/career' },
  { label: 'Блог', href: '/blog' },
  { label: 'Новости', href: '/news' },
  { label: 'Контакты', href: '/contacts' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-unbounded">
          КИБЕРИЯ
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="primary" size="sm" className="hidden md:block">
          Обсудить проект
        </Button>

        {/* Мобильная кнопка */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* Мобильное меню (оверлей) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold">КИБЕРИЯ</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-lg">
            {navItems.map((item) => (
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