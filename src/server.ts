import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'

import VideoResolver from './graphql/category/VideoResolver'
import CategoryResolver from './graphql/category/CategoryResolver'
import './utils/connection'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver],
  })

  new ApolloServer({ schema }).listen({ port: 3333 }, () =>
    console.log('Server is running at port 3333 🥳'),
  )
}

bootstrap()
