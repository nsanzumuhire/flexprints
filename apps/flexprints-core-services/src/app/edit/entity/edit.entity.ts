import { ProductContentDto } from '@flexprints/dtos';
import { IEdit } from '@flexprints/interfaces';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import * as mongoose from 'mongoose';

@ObjectType()
@Schema()
export class Edit implements IEdit {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Field(() => ID)
  id: ObjectId;

  @Prop({ type: String, required: true })
  @Field()
  userId: string;

  @Prop({ type: Boolean, required: true })
  @Field()
  isDraft: boolean;

  @Prop({ type: String, required: true })
  @Field()
  productId: string;

  @Field()
  @Prop(() => ProductContentDto)
  front: ProductContentDto;

  @Field()
  @Prop(() => ProductContentDto)
  back: ProductContentDto;
}

export const EditSchema = SchemaFactory.createForClass(Edit);
