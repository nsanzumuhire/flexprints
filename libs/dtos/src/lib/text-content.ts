import { EALignment } from '@flexprints/enums';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';

@ObjectType()
export class TextContentDto {
  @Field(() => [Int], { nullable: true })
  fontSize!: number[]; // [60,60],

  @Field({ nullable: true })
  fontFamily!: string;

  @Field({ nullable: true })
  rotateRatio!: number;

  @Field({ nullable: true })
  cropRatio!: number;

  @Field({ nullable: true })
  isOutline!: boolean;

  @Field(() => EALignment, { nullable: true })
  alignment!: EALignment;

  @Field({ nullable: true })
  textColor!: string; // "#fff",

  @Field(() => [Int], { nullable: true })
  position!: number[]; // WxH [234.5, 67.9],

  @Field({ nullable: true })
  data!: string;
}

registerEnumType(EALignment, { name: 'EALignment' });
