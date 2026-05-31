import { apiClient } from '@/shared/api/client';
import { Project } from '../model/types';
import { mockProjects } from './mock';

const USE_MOCK = true; // пока используем моки, потом переключим на false

export const projectApi = {
  getProjects: async (): Promise<Project[]> => {
    if (USE_MOCK) {
      return Promise.resolve(mockProjects);
    }
    return apiClient<Project[]>('/projects');
  },
};