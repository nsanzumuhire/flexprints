import { ProductContentDto } from '@flexprints/dtos';
import { ObjectId } from 'mongodb';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IEdit } from '@flexprints/interfaces';

@ObjectType()
@Schema()
export class Edit implements IEdit {
  @Field(() => ID)
  @Directive('@key(fields: "id")')
  id: ObjectId;

  @Field()
  @Prop({ required: true })
  userId: string;

  @Field()
  @Prop()
  isDraft: boolean;

  @Field()
  @Prop({ required: true })
  productId: string;

  @Field()
  @Prop(() => ProductContentDto)
  front: ProductContentDto;

  @Field()
  @Prop(() => ProductContentDto)
  back: ProductContentDto;
}

export const EditSchema = SchemaFactory.createForClass(Edit);
