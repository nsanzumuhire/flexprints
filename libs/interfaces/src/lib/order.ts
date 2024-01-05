import { EOrderStatus } from '@flexprints/enums';
import { SizeData } from './size-data';

export interface IOrder {
  uuid: string;
  postId: string;
  status: EOrderStatus;
  totalAmount: number;
  sizeOptions: SizeData; // { small: 12, large: 5, ...}
}
