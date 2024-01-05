export interface IPost {
  id: string;
  userId: string;
  names: string; // user first name and last name
  title?: string;
  slug?: string;
  description?: string;
  price: number;
  createdDate: Date;
  updatedDate: Date;
  editId?: string; // Edit ID
  thumbnail: string; // image url
}
