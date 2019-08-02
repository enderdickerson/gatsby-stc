import React from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { Query } from "react-apollo"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const APOLLO_QUERY = gql`
  query {
    hello
  }
`
// <Query query={APOLLO_QUERY}>
//   {({ data, loading, error }) => {
//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error.message}</p>
//     return <h1>{data.hello}</h1>
//   }}
// </Query>

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
