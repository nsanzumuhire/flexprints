import { EALignment } from '@flexprints/enums';

export interface TextContent {
  fontSize: number[]; // [60,60],
  fontFamily: string;
  rotateRatio: number;
  cropRatio: number;
  isOutline: boolean;
  alignment: EALignment;
  textColor: string; // "#fff",
  position: number[]; // WxH [234.5, 67.9],
  data: string;
}
