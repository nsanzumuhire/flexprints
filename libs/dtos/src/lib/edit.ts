import { Field, ObjectType } from '@nestjs/graphql';
import { ProductContentDto } from './product-content';

@ObjectType()
export class EditDto {
  @Field(() => String, { nullable: true })
  id!: unknown;

  @Field({ nullable: true })
  productId!: string;

  @Field({ nullable: true })
  userId!: string;

  @Field({ nullable: true })
  isDraft!: boolean;

  @Field(() => ProductContentDto, { nullable: true })
  front!: ProductContentDto;

  @Field(() => ProductContentDto, { nullable: true })
  back!: ProductContentDto;
}
