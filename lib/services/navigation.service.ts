import { NavigationItem } from '../types';

const navigationItems: NavigationItem[] = [
  {
    id: 'about',
    name: 'About',
    href: '/about',
    description: 'Learn more about HomeBoards'
  },
  {
    id: 'contact',
    name: 'Contact',
    href: '/contact',
    description: 'Get in touch with our team'
  },
  {
    id: 'help',
    name: 'Help',
    href: '/help',
    description: 'Find answers to common questions'
  }
];

const secureNavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    href: '/dashboard',
    description: 'Overview of your properties'
  },
  {
    id: 'houses',
    name: 'Houses',
    href: '/houses',
    description: 'Manage your properties'
  },
  {
    id: 'tasks',
    name: 'Tasks',
    href: '/tasks',
    description: 'Track maintenance tasks'
  },
  {
    id: 'documents',
    name: 'Documents',
    href: '/documents',
    description: 'Store important files'
  },
  {
    id: 'paints',
    name: 'Paints',
    href: '/paints',
    description: 'Track paint colors'
  },
  {
    id: 'settings',
    name: 'Settings',
    href: '/settings',
    description: 'Manage your account'
  }
];

export const getNavigationItems = async (): Promise<NavigationItem[]> => {
  return Promise.resolve(navigationItems);
};

export const getSecureNavigationItems = async (): Promise<NavigationItem[]> => {
  return Promise.resolve(secureNavigationItems);
};