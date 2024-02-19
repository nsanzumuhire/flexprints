import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { environment } from '../environments/environment';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {},
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'core', url: environment.core_microservice_url },
            { name: 'product', url: environment.product_microservice_url },
          ],
        }),
      },
    }),
  ],
})
export class AppModule {}
