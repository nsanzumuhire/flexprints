export interface ImageContent {
  uploadSize: number[]; // [60,60],
  cropRatio: number;
  rotateRatio: number;
  isGrayScale: boolean;
  isRemoveWhite: boolean;
  imageColors: string[]; //["#fff","#000"]
  imageNewColors: string[];
  position: number[]; // WxH [234.5, 67.9]
  data: string;
}
