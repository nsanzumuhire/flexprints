import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { EditModule } from './edit/edit.module';
import { Edit } from './edit/entity/edit.entity';
import { EAppPath } from '@flexprints/enums';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    PostModule,
    EditModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: environment?.uat,
      sortSchema: true,
      autoSchemaFile: {
        path: EAppPath.CORE_SERVICE + 'graphql.schema.gql',
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [Edit],
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
