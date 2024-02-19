import { Injectable } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
import { Post } from '../entity/post.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postRepository: Model<Post>
  ) {}

  @Mutation(() => Post)
  async createPost(post: Post): Promise<Post> {
    //todo: logic to check existence
    return await new this.postRepository(post).save();
  }

  @Query(() => Post)
  async getPost(id: string): Promise<Post> {
    return await this.postRepository.findById(id).exec();
  }

  @Query(() => [Post])
  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find().exec();
  }
}
