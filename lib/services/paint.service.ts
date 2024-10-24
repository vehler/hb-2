import { Paint } from '../types';

let paints: Paint[] = [
  {
    id: '1',
    room: 'Living Room',
    brand: 'Sherwin-Williams',
    color: 'Agreeable Gray',
    finish: 'Eggshell',
    dateApplied: '2024-01-15T00:00:00Z',
    houseId: '1',
    userId: '1',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  }
];

export const getPaints = async (userId: string): Promise<Paint[]> => {
  return paints.filter(paint => paint.userId === userId);
};

export const getPaintsByHouseId = async (houseId: string, userId: string): Promise<Paint[]> => {
  return paints.filter(paint => paint.houseId === houseId && paint.userId === userId);
};

export const getPaintById = async (id: string, userId: string): Promise<Paint | undefined> => {
  return paints.find(paint => paint.id === id && paint.userId === userId);
};

export const createPaint = async (data: Omit<Paint, 'id' | 'createdAt' | 'updatedAt'>): Promise<Paint> => {
  const newPaint: Paint = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  paints.push(newPaint);
  return newPaint;
};

export const updatePaint = async (id: string, userId: string, data: Partial<Paint>): Promise<Paint | undefined> => {
  const index = paints.findIndex(paint => paint.id === id && paint.userId === userId);
  if (index === -1) return undefined;

  paints[index] = {
    ...paints[index],
    ...data,
    updatedAt: new Date().toISOString()
  };
  return paints[index];
};

export const deletePaint = async (id: string, userId: string): Promise<boolean> => {
  const initialLength = paints.length;
  paints = paints.filter(paint => !(paint.id === id && paint.userId === userId));
  return paints.length < initialLength;
};