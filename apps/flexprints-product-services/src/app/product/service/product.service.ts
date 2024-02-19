import { Injectable } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
// import { Product } from '../../../graphql.schema';
import { Product } from '../entity/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productRepository: Model<Product>
  ) {}

  @Mutation(() => Product)
  async createProduct(product: Product): Promise<Product> {
    // todo: new logic to check existence
    return await new this.productRepository(product).save();
  }

  @Query(() => Product)
  async getProduct(id: string): Promise<Product> {
    return await this.productRepository.findById(id).exec();
  }

  @Query(() => [Product])
  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find().exec();
  }
}
