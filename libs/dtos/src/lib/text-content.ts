import { EALignment } from '@flexprints/enums';
import {
  Directive,
  Field,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

@ObjectType()
@Directive(
  '@key(fields: "fontSize,fontFamily,isOutline,alignment,textColor,position,rotateRatio,cropRatio,data")'
)
export class TextContentDto {
  @Field(() => [Int])
  fontSize!: number[]; // [60,60],

  @Field()
  fontFamily!: string;

  @Field()
  rotateRatio!: number;

  @Field()
  cropRatio!: number;

  @Field()
  isOutline!: boolean;

  @Field(() => EALignment)
  alignment!: EALignment;

  @Field()
  textColor!: string; // "#fff",

  @Field(() => [Int])
  position!: number[]; // WxH [234.5, 67.9],

  @Field()
  data!: string;
}

registerEnumType(EALignment, { name: 'EALignment' });
