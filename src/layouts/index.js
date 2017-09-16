import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Provider, Flex } from 'rebass'

import Header from "../components/Header";
import './index.css'

const TemplateWrapper = ({ children }) => (
  <Provider>
    <Helmet
      title="Bill Johnson"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <ChildContainer>
      {children()}
    </ChildContainer>
  </Provider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

const ChildContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export default TemplateWrapper
