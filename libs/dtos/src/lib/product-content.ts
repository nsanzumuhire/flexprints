import { Directive, Field, ObjectType } from '@nestjs/graphql';
import { ImageContentDto } from './image-content';
import { TextContentDto } from './text-content';

@ObjectType()
export class ProductContentDto {
  @Field(() => [ImageContentDto])
  images!: ImageContentDto[];

  @Field(() => [TextContentDto])
  texts!: TextContentDto[];
}
