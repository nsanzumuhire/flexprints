import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive(
  '@key(fields: "data,position,imageNewColors,imageColors,isRemoveWhite,isGrayScale,rotateRatio,cropRatio,uploadSize")'
)
export class ImageContentDto {
  @Field(() => [Int])
  uploadSize!: number[]; // [60,60],

  @Field(() => [Int])
  cropRatio!: number;

  @Field({ nullable: true })
  rotateRatio!: number;

  @Field({ nullable: true })
  isGrayScale!: boolean;

  @Field({ nullable: true })
  isRemoveWhite!: boolean;

  @Field(() => [String], { nullable: true })
  imageColors!: string[]; //["#fff","#000"]

  @Field(() => [String], { nullable: true })
  imageNewColors!: string[];

  @Field(() => [Int], { nullable: true })
  position!: number[]; // WxH [234.5, 67.9]

  @Field({ nullable: true })
  data!: string;
}
