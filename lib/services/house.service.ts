import { House } from '../types';

let houses: House[] = [
  {
    id: '1',
    name: 'Main Residence',
    address: '123 Main Street, Cityville, ST 12345',
    userId: '1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const getHouses = async (userId: string): Promise<House[]> => {
  return houses.filter(house => house.userId === userId);
};

export const getHouseById = async (id: string, userId: string): Promise<House | undefined> => {
  return houses.find(house => house.id === id && house.userId === userId);
};

export const createHouse = async (data: Omit<House, 'id' | 'createdAt' | 'updatedAt'>): Promise<House> => {
  const newHouse: House = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  houses.push(newHouse);
  return newHouse;
};

export const updateHouse = async (id: string, userId: string, data: Partial<House>): Promise<House | undefined> => {
  const index = houses.findIndex(house => house.id === id && house.userId === userId);
  if (index === -1) return undefined;

  houses[index] = {
    ...houses[index],
    ...data,
    updatedAt: new Date().toISOString()
  };
  return houses[index];
};

export const deleteHouse = async (id: string, userId: string): Promise<boolean> => {
  const initialLength = houses.length;
  houses = houses.filter(house => !(house.id === id && house.userId === userId));
  return houses.length < initialLength;
};