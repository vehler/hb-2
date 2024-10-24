import { Paint } from '../types';

const paints: Paint[] = [
  {
    id: '1',
    room: 'Living Room',
    brand: 'Sherwin-Williams',
    color: 'Agreeable Gray',
    finish: 'Eggshell',
    dateApplied: '2024-01-15T00:00:00Z',
    houseId: '1',
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    room: 'Kitchen',
    brand: 'Benjamin Moore',
    color: 'Simply White',
    finish: 'Semi-Gloss',
    dateApplied: '2024-01-10T00:00:00Z',
    houseId: '1',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z'
  }
];

export const getPaints =async () => {
  return Promise.resolve(paints)
}

export const getPaintsByHouseId = async (houseId: string): Promise<Paint[]> => {
  return Promise.resolve(paints.filter(paint => paint.houseId === houseId));
};