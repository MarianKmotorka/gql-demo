import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import axios from 'axios'

import typeDefs from './typeDefs'

const resolvers = {
  Query: {
    todos: async () =>
      (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
  },
}

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const app = express()
  await server.start()
  server.applyMiddleware({ app })

  app.listen(4000, () => {
    console.log('server started on http://localhost:4000' + server.graphqlPath)
  })
}

main()
