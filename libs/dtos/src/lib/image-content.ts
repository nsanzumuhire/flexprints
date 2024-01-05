import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class ImageContentDto {
  @Field(() => [Int], { nullable: true })
  @Prop({ type: [Number] })
  uploadSize!: number[]; // [60,60],

  @Field({ nullable: true })
  cropRatio!: number;

  @Field({ nullable: true })
  rotateRatio!: number;

  @Field({ nullable: true })
  isGrayScale!: boolean;

  @Field({ nullable: true })
  isRemoveWhite!: boolean;

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String] })
  imageColors!: string[]; //["#fff","#000"]

  @Field(() => [String], { nullable: true })
  @Prop({ type: [String] })
  imageNewColors!: string[];

  @Field(() => [Int], { nullable: true })
  @Prop({ type: [Number] })
  position!: number[]; // WxH [234.5, 67.9]

  @Field({ nullable: true })
  data!: string;
}
