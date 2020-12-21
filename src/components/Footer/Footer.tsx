import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #11236d;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: ${props => props.theme.topBarSize}px;
  max-width: ${props => props.theme.siteWidth}px;
  width: 100%;
  background-color: #11236d;
`

export default Footer