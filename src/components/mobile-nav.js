import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {Logo, HeaderLink} from './header'
import target from '../images/box.svg'

const MobileNavContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: white;
`
const MobileNavGroup = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  font-weight: 500;
  grid-template-columns: 1fr 1fr;
`

const MobileLink = styled(Link)`
  color: rgba(73, 76, 87, 1);
  text-decoration: none;
  font-weight: 500;
  display: grid;
  justify-items: center;
  font-size: 2.4rem;
`
const CloseNav = styled(Link)`
  background: none;
  border: none;
  color: #874ef4;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  justify-self: end;
`

const MobileNav = props => (
  <MobileNavContainer>
    <MobileNavGroup>
    <HeaderLink to="/">
      <Logo src={target} alt="logo" width="20" />
    </HeaderLink>
      <CloseNav onClick={() => props.handleMenuToggle()} to="/">Close</CloseNav>
    </MobileNavGroup>
    <MobileLink to="/">Home</MobileLink>
  </MobileNavContainer>
)

export default MobileNav
