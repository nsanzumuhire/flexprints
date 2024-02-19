import {
  Mutation,
  Resolver,
  Query,
  Args,
  ResolveReference,
} from '@nestjs/graphql';
import { Edit } from '../entity/edit.entity';
import { EditService } from '../service/edit.service';

@Resolver('Edit')
export class EditResolver {
  constructor(private editService: EditService) {}

  @Mutation(() => Edit)
  // todo: createEditInput later
  async CoreserviceCreateEdit(args: Edit): Promise<Edit> {
    return await this.editService.createEdit(args);
  }

  @Query(() => Edit)
  async CoreserviceGetEditById(@Args('id') id: string): Promise<Edit> {
    return this.editService.getEdit(id);
  }

  @Query(() => [Edit])
  async CoreserviceGetAllEdits(): Promise<Edit[]> {
    return this.editService.getAllEdits();
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<Edit> {
    return this.editService.getEdit(reference.id);
  }
}
