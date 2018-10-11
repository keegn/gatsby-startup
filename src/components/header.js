import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/gatsby-icon.png'
import styled from 'styled-components'
// we could also {require('../images/gatsby-icon.png')} within the src={} - helpful if you have lots of images
import './Header.css'

const HeaderContainer = styled.div`
  position: fixed;
    height: 40px;
    width: 100%;
    padding: 20px 0;
    z-index: 100;
    background: white;
`
const HeaderGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    max-width: 800px;
`
const HeaderLink = styled(Link)`
  color: #333e48;
  text-decoration: none;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const HeaderButton = styled.button`
  padding: 8px 12px;
  background-color:#5F3893;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderGroup>
      <HeaderLink to="/"><img src={logo} alt="logo" width="30"></img></HeaderLink>
      <HeaderLink to="/product">Product</HeaderLink>
      <HeaderLink to="/pricing">Pricing</HeaderLink>
      <Link to="/sign-up"><HeaderButton>Get Demo</HeaderButton></Link>
    </HeaderGroup>
  </HeaderContainer>
)

export default Header
