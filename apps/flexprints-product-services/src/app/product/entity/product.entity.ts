import { IProduct } from '@flexprints/interfaces';

import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { EProductType } from '@flexprints/enums';
import { SizeDataDto } from '@flexprints/dtos';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@ObjectType()
export class Product implements IProduct {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Field(() => ID)
  id: ObjectId;

  @Prop({ type: String, required: true })
  @Field()
  name: string;

  @Prop({ type: EProductType, required: true })
  @Field(() => EProductType)
  type: EProductType;

  @Prop({ type: [String], required: true })
  @Field(() => [String])
  colors: string[];

  @Prop({ type: SizeDataDto, required: true })
  @Field(() => SizeDataDto)
  basePrice: SizeDataDto;
}

registerEnumType(EProductType, { name: 'EProductType' });
export const ProductSchema = SchemaFactory.createForClass(Product);
