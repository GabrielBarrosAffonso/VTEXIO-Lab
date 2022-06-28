import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o6hwu00t4d01xx86ec225x/master',
  cache: new InMemoryCache()
})