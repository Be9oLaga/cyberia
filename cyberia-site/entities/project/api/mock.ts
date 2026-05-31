import { Project } from '../model/types';

export const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Forkagro',
    description: 'Платформа для развития агробизнеса на национальном и международном рынке',
    image: '/forkagro.jpg',
    price: 1200000,
  },
  {
    id: 2,
    title: 'Манна Онлайн',
    description: 'Мобильное приложение для заказа доставки товаров на дом из сети гипермаркетов «Манна»',
    image: '/manna.jpg',
    price: 950000,
  },
  {
    id: 3,
    title: 'Газпром Карьера',
    description: 'Интерактивная карьерная карта для сотрудников нефтяной компании',
    image: '/gazprom.jpg',
  },
  {
    id: 4,
    title: 'Комфортел',
    description: 'Корпоративный сайт для оператора связи бизнес-класса',
    image: '/comfortel.jpg',   // ← здесь были /, исправлено на '/...'
  },
  {
    id: 5,
    title: 'Калькулятор парикмахера',
    description: 'Веб-платформа с набором инструментов для мастеров бьюти-индустрии',
    image: '/haircut.jpg',
  },
];