import { Document } from '../types';

const documents: Document[] = [
  {
    id: '1',
    title: 'Home Insurance Policy',
    type: 'pdf',
    url: '/documents/insurance.pdf',
    houseId: '1',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Property Deed',
    type: 'pdf',
    url: '/documents/deed.pdf',
    houseId: '1',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z'
  }
];

export const getDocuments =async () => {
  return Promise.resolve(documents)
}

export const getDocumentsByHouseId = async (houseId: string): Promise<Document[]> => {
  return Promise.resolve(documents.filter(document => document.houseId === houseId));
};