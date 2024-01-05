import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostDto {
  @Field({ nullable: true })
  id!: string;

  @Field({ nullable: true })
  userId!: string;

  @Field({ nullable: true })
  names!: string; // user first name and last name

  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  slug!: string;

  @Field({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  price!: number;

  @Field({ nullable: true })
  createdDate!: Date;

  @Field({ nullable: true })
  updatedDate!: Date;

  @Field({ nullable: true })
  editId!: string; // Edit ID

  @Field({ nullable: true })
  thumbnail!: string; // image url
}
