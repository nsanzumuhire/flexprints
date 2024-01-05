import { ImageContent } from './image-content';
import { TextContent } from './text-content';

export interface ProductContent {
  images: ImageContent[];
  texts: TextContent[];
}
