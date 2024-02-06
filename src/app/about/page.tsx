import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import Spacer from '@/Components/UIKit/Spacer/Spacer'
import WhyTBE from './Components/WhyTBE/WhyTBE'
import MissionAndValue from './Components/MissionAndValue/MissionAndValue'
import PartnersSlide from '@/Components/UIKit/PartnersSlide/PartnersSlide'
import Roadmap from './Components/Roadmap/Roadmap'
import LoaderWrapper from '@/Components/Advanced/Loader/LoaderWrapper'

const AboutUs = () => {
  return (
    <LoaderWrapper>
      <HeroSection />
      <Spacer />
      <WhyTBE />
      <Spacer />
      <Roadmap />
      <Spacer />
      <MissionAndValue />
      <Spacer />
      <PartnersSlide value="04" />
      <Spacer />
    </LoaderWrapper>
  )
}

export default AboutUs
