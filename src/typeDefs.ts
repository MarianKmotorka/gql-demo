import { gql } from 'apollo-server'

export default gql`
  type Todo {
    id: Int!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]
  }
`
