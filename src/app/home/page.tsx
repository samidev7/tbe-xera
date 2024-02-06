import React from 'react'

// Components
import Joiners from './Components/Joiners/Joiners'
import PartnersSlide from '@/Components/UIKit/PartnersSlide/PartnersSlide'
import Projects from './Components/Projects/Projects'
import HeroSection from './Components/HeroSection/HeroSection'
import Spacer from '@/Components/UIKit/Spacer/Spacer'
import LoaderWrapper from '@/Components/Advanced/Loader/LoaderWrapper'

const HomeView: React.FC = () => {
  return (
    <LoaderWrapper>
      <HeroSection />
      <Spacer />
      <Projects />
      <Spacer />
      <PartnersSlide value="02" />
      <Spacer />
      <Joiners />
      <Spacer />
    </LoaderWrapper>
  )
}

export default HomeView
