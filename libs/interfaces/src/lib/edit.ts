import { ProductContent } from './product-content';

export interface IEdit {
  id?: unknown;
  productId: string;
  userId: string;
  isDraft: boolean;
  front?: ProductContent;
  back?: ProductContent;
}
