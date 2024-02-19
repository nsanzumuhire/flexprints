import { ObjectId } from 'mongodb';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IPost } from '@flexprints/interfaces';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@ObjectType()
export class Post implements IPost {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  @Field(() => ID)
  id: ObjectId;

  @Prop({ required: true, type: String })
  @Field(() => String)
  collectionId: string;

  @Prop({ required: true, type: String })
  @Field()
  userId: string;

  @Prop({ required: true, type: String })
  @Field()
  names: string;

  @Prop({ required: true, type: String })
  @Field()
  slug: string;

  @Prop({ type: String })
  @Field()
  description: string;

  @Prop({ required: true, type: Number })
  @Field()
  price: number;

  @Prop({ required: true, type: String })
  @Field()
  editId: string;

  @Prop({ required: true, type: String })
  @Field()
  thumbnail: string;

  @Prop({ default: true, type: Boolean })
  @Field({ nullable: true })
  status: boolean;

  @Prop({ default: false, type: Boolean })
  @Field({ nullable: true })
  isDisabled: boolean;

  @Prop({ type: Date })
  @Field(() => String)
  createdDate: string;

  @Prop({ type: Date })
  @Field(() => String)
  updatedDate: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
