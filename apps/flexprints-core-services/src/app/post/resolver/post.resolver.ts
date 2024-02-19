import {
  Args,
  Mutation,
  Query,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { Post } from '../entity/post.entity';
import { PostService } from '../service/post.service';

@Resolver('Post')
export class PostResolver {
  constructor(private postService: PostService) {}

  @Mutation(() => Post)
  // todo: createPostInput later
  async CoreserviceCreatePost(args: Post): Promise<Post> {
    const post = await this.postService.createPost(args);
    return post;
  }

  @Query(() => Post)
  async CoreserviceGetPostById(@Args('id') id: string): Promise<Post> {
    return this.postService.getPost(id);
  }

  @Query(() => [Post])
  async CoreserviceGetAllPost(): Promise<Post[]> {
    return this.postService.getAllPosts();
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Post> {
    return this.postService.getPost(reference.id);
  }
}
