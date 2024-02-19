import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "small, medium, large, xlarge")')
export class SizeDataDto {
  @Field({ nullable: true })
  small: number; // can be used for selected numbers or base price

  @Field({ nullable: true })
  medium: number; // eg: on order it's selected numbers while on Product it's base price

  @Field({ nullable: true })
  large: number;

  @Field({ nullable: true })
  xlarge: number;
}
