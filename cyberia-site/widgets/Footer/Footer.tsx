import Link from 'next/link';
import { navItems, NavItem } from '@/shared/config/navigation';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">КИБЕРИЯ</h3>
            <p className="text-sm text-gray-400">
              © 2026 ООО «Киберня», номер в реестре аккредитованных IT-компаний: 53278
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <ul className="space-y-2">
              {navItems.slice(0, 4).map((item: NavItem) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {navItems.slice(4).map((item: NavItem) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-blue-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-sm">
            <p>+7 960 959 18 66</p>
            <p>hello@cyberia.studio</p>
            <p>г.Барнаул, ул.Ярных, 35, оф.10</p>
            <Link href="/privacy" className="mt-2 block hover:text-blue-400">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};