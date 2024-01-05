import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { environment } from '../environments/environment';
import { EAppPath } from '@flexprints/enums';
import { join } from 'path';
import { EditModule } from './edit/edit.module';

@Module({
  imports: [
    EditModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: environment?.uat,
      sortSchema: true,
      autoSchemaFile: EAppPath.CORE_SERVICE + 'graphql.schema.gql',
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: environment.mongo_uri,
        useNewUrlParser: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
