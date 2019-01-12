import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import target from '../images/box.svg'
import { Wave, WaveTop } from './wave'

const FooterContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  height: 200px;
  z-index: 100;
  background: black;
  bottom: 0;
`
const FooterGroup = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 1fr) repeat(3, 10rem) 1fr;
  align-items: center;
  grid-template-rows: 100px 1fr;
  margin: 0 auto;
  max-width: 800px;
  font-weight: 500;
  padding: 0 2rem;
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.6rem;
  display: grid;
  justify-items: center;
  @media (max-width: 600px) {
    display: ${props => props.mobileDisplayNone && 'none'};
  }
`
const Logo = styled.img`
  justify-self: start;
`
const SocialLink = styled(Link)`
  justify-self: end;
  font-weight: 500;
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  @media (max-width: 600px) {
    justify-self: center;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <WaveTop>
          <Wave />
        </WaveTop>
        <FooterGroup>
          <FooterLink mobileDisplayNone to="/">
            <Logo src={target} alt="logo" width="20" />
          </FooterLink>
          <FooterLink exact to="/">
            Terms
          </FooterLink>
          <FooterLink to="/">Privacy</FooterLink>
          <FooterLink to="/">Contact</FooterLink>
          <SocialLink to="/">Social</SocialLink>
        </FooterGroup>
      </FooterContainer>
    )
  }
}

export default Footer
