import React from "react"
import styled from "styled-components"
import Link from 'gatsby-link'
import { 
  Container,
  Heading,
  Divider,
  Card,
  Box,
  BackgroundImage,
  Subhead,
  Small,
  Flex,
} from 'rebass'

class IndexPage extends React.Component {
  render() {
    return (
      <GradientContainer align='center' justify='center'>
        <NameContainer column>
          <Heading>Bill Johnson</Heading>
          <Subhead>Developer, Dreamer, Deliverer</Subhead>
        </NameContainer>
      </GradientContainer>
    )
  }
}

const NameContainer = styled(Flex)`
  color: white;
`;

const GradientContainer = styled(Flex)`
  position: relative;
  height: 100vh;
  background: linear-gradient(#FF7171, #E86161)
`;

export default IndexPage
