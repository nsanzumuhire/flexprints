import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ProductModule } from './product/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { Product } from './product/entity/product.entity';
import { EAppPath } from '@flexprints/enums';

@Module({
  imports: [
    ProductModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: environment?.uat,
      sortSchema: true,
      autoSchemaFile: {
        path: EAppPath.PRODUCT_SERVICE + 'graphql.schema.gql',
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [Product],
      },
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: environment.mongo_uri,
      }),
    }),
  ],
  providers: [],
})
export class AppModule {}
