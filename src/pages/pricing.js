import React from 'react'
import {
  Hero,
  HeroGroup,
  HeroGroupH1,
  HeroP,
} from '../components/global-styles/global-styles'
import Layout from '../components/layout'
import Section from '../components/section'

const PricingPage = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <HeroGroupH1>Simple pricing</HeroGroupH1>
        <HeroP>
          Reinventing business software with the help of smart machines.
        </HeroP>
      </HeroGroup>
    </Hero>
    <Section />
  </Layout>
)

export default PricingPage
