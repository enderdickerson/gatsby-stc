import React from "react"
import { ApolloProvider } from "react-apollo"
import { client } from "./src/apollo"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
