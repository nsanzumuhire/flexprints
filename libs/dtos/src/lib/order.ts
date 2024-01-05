import { EOrderStatus } from '@flexprints/enums';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { SizeDataDto } from './size-data';

@ObjectType()
export class OrderDto {
  @Field({ nullable: true })
  uuid!: string;

  @Field({ nullable: true })
  postId!: string;

  @Field(() => EOrderStatus, { nullable: true })
  status!: EOrderStatus;

  @Field({ nullable: true })
  totalAmount!: number;

  @Field({ nullable: true })
  @Prop(() => SizeDataDto)
  sizeOptions!: SizeDataDto; // { small: 12, large: 5, ...}
}
