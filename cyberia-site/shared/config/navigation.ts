export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Проекты', href: '/projects' },
  { label: 'Услуги', href: '/services' },
  { label: 'О компании', href: '/about' },
  { label: 'Карьера', href: '/career' },
  { label: 'Блог', href: '/blog' },
  { label: 'Новости', href: '/news' },
  { label: 'Контакты', href: '/contacts' },
];