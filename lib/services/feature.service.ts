import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: '1',
    icon: 'Home',
    title: 'House Management',
    description: 'Add and manage multiple properties with detailed information and resident access.'
  },
  {
    id: '2',
    icon: 'ClipboardList',
    title: 'Task Tracking',
    description: 'Create, assign, and track household tasks and maintenance reminders.'
  },
  {
    id: '3',
    icon: 'FileText',
    title: 'Document Storage',
    description: 'Securely store and organize important household documents and paperwork.'
  },
  {
    id: '4',
    icon: 'Paintbrush',
    title: 'Paint Management',
    description: 'Track paint colors, brands, and dates for every room in your home.'
  }
];

export const getFeatures = async (): Promise<Feature[]> => {
  return Promise.resolve(features);
};