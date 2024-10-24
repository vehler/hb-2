import { User } from '../types';

let users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const getUsers = async (): Promise<User[]> => {
  return users;
};

export const getUserById = async (id: string): Promise<User | undefined> => {
  return users.find(user => user.id === id);
};

export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  return users.find(user => user.email === email);
};

export const createUser = async (data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
  const newUser: User = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id: string, data: Partial<User>): Promise<User | undefined> => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return undefined;

  users[index] = {
    ...users[index],
    ...data,
    updatedAt: new Date().toISOString()
  };
  return users[index];
};

export const deleteUser = async (id: string): Promise<boolean> => {
  const initialLength = users.length;
  users = users.filter(user => user.id !== id);
  return users.length < initialLength;
};