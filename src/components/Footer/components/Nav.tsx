import React from 'react'
import styled from 'styled-components'
import Spacer from '../../Spacer'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Styledlayout>
        Copyright 2020@ Go BRRR
      </Styledlayout>
      
      <Spacer/>
      <Spacer/>

      <StyledLink
        href="https://twitter.com/GoBRRR_finance"
        target="_blank"
      >
        TWITTER
      </StyledLink> 
      <StyledLink>
        |
      </StyledLink>
      <StyledLink
        href="https://t.me/Go_BRRR"
        target="_blank"
      >
        TELEGRAM
      </StyledLink>
      <StyledLink>
        |
      </StyledLink>
      <StyledLink
        href="https://gobrrr.medium.com"
        target="_blank"
      >
        MEDIUM
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  background-color: #11236d;
`
const Styledlayout = styled.nav`
  display: flex;
  padding-right: ${(props) => props.theme.spacing[40]}px;
  color: ${(props) => props.theme.color.grey[400]};
`


const StyledLink = styled.a`
  font-family: Lucida Console,Monaco,monospace;
  font-weight: 600;
  font-size: 15px;
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[1]}px;
  padding-right: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 800;
  font-size: 20px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav