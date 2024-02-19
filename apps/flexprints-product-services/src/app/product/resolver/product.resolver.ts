import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Mutation(() => Product)
  // todo: create a lib for createProductInput
  async ProductServiceCreateProduct(args: Product): Promise<Product> {
    const product = await this.productService.createProduct(args);
    return product;
  }

  @Query(() => Product)
  async ProductServiceGetProductById(@Args('id') id: string): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Query(() => [Product])
  async ProductServiceGetAllProduct(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
}
