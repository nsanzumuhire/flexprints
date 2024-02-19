import { Injectable } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
import { Edit } from '../entity/edit.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EditService {
  constructor(
    @InjectModel(Edit.name)
    private readonly editRepository: Model<Edit>
  ) {}

  @Mutation(() => Edit)
  async createEdit(edit: Edit): Promise<Edit> {
    //todo: logic to check existence
    return await new this.editRepository(edit).save();
  }

  @Query(() => Edit)
  async getEdit(id: string): Promise<Edit> {
    return await this.editRepository.findById(id).exec();
  }

  @Query(() => [Edit])
  async getAllEdits(): Promise<Edit[]> {
    return await this.editRepository.find();
  }
}
