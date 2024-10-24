import { Document } from '../types';

let documents: Document[] = [
  {
    id: '1',
    title: 'Home Insurance Policy',
    type: 'pdf',
    url: '/documents/insurance.pdf',
    houseId: '1',
    userId: '1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  }
];

export const getDocuments = async (userId: string): Promise<Document[]> => {
  return documents.filter(document => document.userId === userId);
};

export const getDocumentsByHouseId = async (houseId: string, userId: string): Promise<Document[]> => {
  return documents.filter(document => document.houseId === houseId && document.userId === userId);
};

export const getDocumentById = async (id: string, userId: string): Promise<Document | undefined> => {
  return documents.find(document => document.id === id && document.userId === userId);
};

export const createDocument = async (data: Omit<Document, 'id' | 'createdAt' | 'updatedAt'>): Promise<Document> => {
  const newDocument: Document = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  documents.push(newDocument);
  return newDocument;
};

export const updateDocument = async (id: string, userId: string, data: Partial<Document>): Promise<Document | undefined> => {
  const index = documents.findIndex(document => document.id === id && document.userId === userId);
  if (index === -1) return undefined;

  documents[index] = {
    ...documents[index],
    ...data,
    updatedAt: new Date().toISOString()
  };
  return documents[index];
};

export const deleteDocument = async (id: string, userId: string): Promise<boolean> => {
  const initialLength = documents.length;
  documents = documents.filter(document => !(document.id === id && document.userId === userId));
  return documents.length < initialLength;
};