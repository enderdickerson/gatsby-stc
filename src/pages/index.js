import React from 'react'
import { Link } from 'gatsby'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ResultTile from '../components/resulttile'

const APOLLO_QUERY = gql`
  query {
    hello
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
`

const Title = styled.h1`
  text-align: center;
  font-size: 64px;
  margin-top: 200px;
`

// <Query query={APOLLO_QUERY}>
//   {({ data, loading, error }) => {
//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error.message}</p>
//     return <h1>{data.hello}</h1>
//   }}
// </Query>

const IndexPage = props => {
  const cars = Array(30).fill({})
  return (
    <Layout>
      <SEO title="Home" />
      <Title>The Good Ones</Title>
      <Wrapper>
        {cars.map((item, index) => (
          <ResultTile key={index} />
        ))}
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
