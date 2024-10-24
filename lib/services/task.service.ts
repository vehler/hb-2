import { Task } from '../types';

const tasks: Task[] = [
  {
    id: '1',
    title: 'Fix leaky faucet',
    description: 'Kitchen sink faucet needs repair',
    status: 'pending',
    dueDate: '2024-02-01T00:00:00Z',
    houseId: '1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Paint living room',
    description: 'Walls need fresh coat of paint',
    status: 'in-progress',
    dueDate: '2024-02-15T00:00:00Z',
    houseId: '1',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
];

export const getTasksByHouseId = async (houseId: string): Promise<Task[]> => {
  return Promise.resolve(tasks.filter(task => task.houseId === houseId));
};