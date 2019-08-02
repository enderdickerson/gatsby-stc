import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 345px;
  background: #ffffff;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 3px rgba(25, 41, 61, 0.13);
`

const ImageHolder = styled.div`
  background: #aab1c7;
  opacity: 0.5;
  height: 215px;
`

const TextHolder = styled.div`
  height: 130px;
`

const ResultTile = ({}) => (
  <Wrapper>
    <ImageHolder />
    <TextHolder />
  </Wrapper>
)

export default ResultTile
