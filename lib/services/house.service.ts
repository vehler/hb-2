import { House } from '../types';

const houses: House[] = [
  {
    id: '1',
    name: 'Main Residence',
    address: '123 Main Street, Cityville, ST 12345',
    owner: 'John Doe',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Beach House',
    address: '456 Ocean Drive, Beachtown, ST 67890',
    owner: 'John Doe',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
];

export const getHouses = async (): Promise<House[]> => {
  return Promise.resolve(houses);
};

export const getHouseById = async (id: string): Promise<House | undefined> => {
  return Promise.resolve(houses.find(house => house.id === id));
};