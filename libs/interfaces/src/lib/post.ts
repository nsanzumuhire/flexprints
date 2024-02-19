export interface IPost {
  id?: unknown;
  collectionId: string;
  userId: string;
  names: string; // user first name and last name
  title?: string;
  slug?: string;
  description?: string;
  price: number;
  createdDate: string;
  updatedDate: string;
  editId?: string; // Edit ID
  thumbnail: string; // image url
  status: boolean;
  isDisabled: boolean;
}
