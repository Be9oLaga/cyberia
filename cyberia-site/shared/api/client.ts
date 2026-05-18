import { Project } from '@/entities/project/model/types';

export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Forkagro',
    description: 'Платформа для развития агробизнеса на национальном и международном рынке',
    image: '/forkagro.jpg',
    price: 1200000,
  },
  {
    id: 2,
    title: 'Технум',
    description: 'Лендинги, промо-сайты',
    image: '/technum.jpg',
  },
];

export const api = {
  getProjects: (): Promise<Project[]> => Promise.resolve(mockProjects),
  getServices: (): Promise<Service[]> => Promise.resolve([]),
  getPosts: (): Promise<Post[]> => Promise.resolve([]),
};