export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface House {
  id: string;
  name: string;
  address: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate: string;
  houseId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Paint {
  id: string;
  room: string;
  brand: string;
  color: string;
  finish: string;
  dateApplied: string;
  houseId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Document {
  id: string;
  title: string;
  type: string;
  url: string;
  houseId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface NavigationItem {
  id: string;
  name: string;
  href: string;
  description?: string;
}