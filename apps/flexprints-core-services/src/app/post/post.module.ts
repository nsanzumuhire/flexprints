import { Module } from '@nestjs/common';
import { PostResolver } from './resolver/post.resolver';
import { PostService } from './service/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './entity/post.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  providers: [PostService, PostResolver],
  exports: [PostService],
})
export class PostModule {}
