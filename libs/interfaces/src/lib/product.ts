import { EProductType } from '@flexprints/enums';
import { SizeData } from './size-data';

export interface IProduct {
  id?: unknown;
  creatorId?: string;
  name: string;
  type: EProductType;
  colors: string[];
  basePrice: SizeData; // { small: 4000, large: 5000, ...}
}
