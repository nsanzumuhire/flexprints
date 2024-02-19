import { Module } from '@nestjs/common';
import { ProductResolver } from './resolver/product.resolver';
import { ProductService } from './service/product.service';
import { Product, ProductSchema } from './entity/product.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
