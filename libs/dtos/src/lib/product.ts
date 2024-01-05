import { EProductType } from '@flexprints/enums';
import { Field, ObjectType } from '@nestjs/graphql';
import { SizeDataDto } from './size-data';

@ObjectType()
export class ProductDto {
  @Field(() => String, { nullable: true })
  id!: string;

  @Field({ nullable: true })
  name!: string;

  @Field(() => EProductType, { nullable: true })
  type!: EProductType;

  @Field(() => [String], { nullable: true })
  colors!: string[];

  @Field(() => SizeDataDto, { nullable: true })
  basePrice!: SizeDataDto; // { small: 4000, large: 5000, ...}
}
