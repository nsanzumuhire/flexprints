import { Field, ObjectType } from '@nestjs/graphql';
import { ImageContentDto } from './image-content';
import { TextContentDto } from './text-content';

@ObjectType()
export class ProductContentDto {
  @Field(() => [ImageContentDto], { nullable: true })
  images!: ImageContentDto[];

  @Field(() => [TextContentDto], { nullable: true })
  texts!: TextContentDto[];
}
