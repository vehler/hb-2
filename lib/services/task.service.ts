import { Task } from '../types';

let tasks: Task[] = [
  {
    id: '1',
    title: 'Fix leaky faucet',
    description: 'Kitchen sink faucet needs repair',
    status: 'pending',
    dueDate: '2024-02-01T00:00:00Z',
    houseId: '1',
    userId: '1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const getTasks = async (userId: string): Promise<Task[]> => {
  return tasks.filter(task => task.userId === userId);
};

export const getTasksByHouseId = async (houseId: string, userId: string): Promise<Task[]> => {
  return tasks.filter(task => task.houseId === houseId && task.userId === userId);
};

export const getTaskById = async (id: string, userId: string): Promise<Task | undefined> => {
  return tasks.find(task => task.id === id && task.userId === userId);
};

export const createTask = async (data: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Promise<Task> => {
  const newTask: Task = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  tasks.push(newTask);
  return newTask;
};

export const updateTask = async (id: string, userId: string, data: Partial<Task>): Promise<Task | undefined> => {
  const index = tasks.findIndex(task => task.id === id && task.userId === userId);
  if (index === -1) return undefined;

  tasks[index] = {
    ...tasks[index],
    ...data,
    updatedAt: new Date().toISOString()
  };
  return tasks[index];
};

export const deleteTask = async (id: string, userId: string): Promise<boolean> => {
  const initialLength = tasks.length;
  tasks = tasks.filter(task => !(task.id === id && task.userId === userId));
  return tasks.length < initialLength;
};