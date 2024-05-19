import React from 'react'
import styled from '@emotion/styled'
import HomePageHero from './components/HomePageHero'
import HomePageMain from './components/HomeMain'

const HomePage = styled.div`
  width: 70%;
`


const Home = () => {
  return (
    <HomePage>
<HomePageHero />
<HomePageMain />
      </HomePage>
  )
}

export default Home