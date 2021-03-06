import styled, { keyframes, injectGlobal } from 'styled-components'
import styledNormalize from 'styled-normalize'

// refactor to createGlobalStyle
injectGlobal`
  ${styledNormalize}
 
html {
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
     -webkit-font-smoothing: antialiased;
    line-height: 1.4;
}

img {
  max-width: 100%;
  height: auto;
}
section {
  padding: 5rem 0;
}
a {
    color: #5334F5;
    font-weight: 600;
}

.active {
    font-weight: 700;
    color: rgba(22, 23, 26, 1);
}
`
// Keyframes

const HeroAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`
export const LogoAnimation = keyframes`
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
// Hero
export const Hero = styled.div`
  background: white;
  height: 500px;
  background-size: cover;
  background-position: center;
  margin: 0;
`
export const HeroGroup = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 175px 50px 150px;
  text-align: center;
  @media (max-width: 600px) {
    margin: 0 auto;
    padding: 150px 24px;
    text-align: center;
  }
`
export const HeroSplit = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
`
export const HeroGroupH1 = styled.h1`
  margin: 0;
  color: rgba(22, 23, 26, 1);
  font-size: 4.8rem;
  line-height: 1.2;
  opacity: 0;
  animation: ${HeroAnimation};
  animation-duration: 2s;
  animation-delay: 0.01s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 600px) {
    font-size: 3.6rem;
  }
`
export const HeroP = styled.p`
  color: rgba(73, 76, 87, 1);
  line-height: 1.2;
  font-size: 2rem;
  padding: 0 0 16px 0;
  animation: ${HeroAnimation} 2s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
`
export const HeroA = styled.button`
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  text-transform: none;
  background: #874ef4;
  box-shadow: 0 2px 0 0 #6416d0;
  padding: 1.6rem 2.4rem 1.4rem;
  text-decoration: none;
  border-radius: 4px;
  outline: none;
  border: none;
  opacity: 0;
  cursor: pointer;
  animation: ${HeroAnimation};
  animation-duration: 2s;
  animation-delay: 0.04s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  transition: 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:hover {
    transform: translateY(-1px);
    background: #7325df;
  }
`
// End Hero

// Section

// Buttons

// Inputs
