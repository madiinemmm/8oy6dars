import styled from '@emotion/styled'
import React from 'react'
import Home from './Home'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'


const Container = styled.div`
display: flex;
width: 1440px;
margin: 0 auto;
`

const App = () => {
  return (
    <Container>
      <LeftSidebar />
      <Home />
      <RightSidebar />
    </Container>
  )
}

export default App