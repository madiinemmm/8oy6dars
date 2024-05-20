import React from 'react'
import styled from '@emotion/styled'
import Home from '../assets/Home.png'
import Search from '../assets/search.png'
import Library from '../assets/Library.png'
import Library2 from '../assets/library+.png'
import Like from '../assets/liked.png'

const LeftSide = styled.div`
  width: 15%;
  background-color: #000000;
  color: #fff;
  padding: 24px;
  padding-left: 0;
`
const Menu = styled.div`
display: flex;
gap: 20px;
align-items: center;
cursor: pointer;
transition: 0.5s ease;
margin-top: 20px;
&:hover{
 color: gray
 
}
`
const MenuText = styled.div`
font-family: Circular Std;
font-size: 18px;
font-weight: 700;
line-height: 22.77px;
text-align: left;


`

const MainMenu = styled.div`
padding-top: 40px;
`
const Menu2 = styled.div`
display: flex;
gap: 20px;
align-items: center;
cursor: pointer;
margin-top: 18px;
transition: 0.5s ease;
margin-top: 20px;
&:hover{
 color: gray
 
}
`
const MenuText2 = styled.div`
  color: gray;
  font-size: 16px;
  margin-top: 21px;
  
`
const MenuTextWrapper = styled.div`
margin-top: 25px;
`
const UnderScore = styled.div`
   width: 100%;
   background-color: #232323;
   height: 1px;
   margin-top: 22px;
   opacity: 0.5;
`



const LeftSidebar = () => {
  return (
   <LeftSide>
    <Menu>
        <img src={Home}/>
         <h3>Home</h3>    
    </Menu>
    <Menu>
        <img src={Search}/>
         <h3>Search</h3>    
    </Menu>
    <Menu>
        <img src={Library}/>
         <h3>Your Library</h3>    
    </Menu>
<MainMenu>
<Menu2>
    <img src={Library2} alt="" />
    <h3>Create Playlist</h3>
    </Menu2>
    <Menu2>
    <img src={Like} alt="" />
    <h3>Liked Songs</h3>
    </Menu2>
</MainMenu>
<UnderScore></UnderScore>
   <MenuTextWrapper>
   <MenuText2>Chill Mix</MenuText2>
   <MenuText2>Insta Hits</MenuText2>
   <MenuText2>Your Top Songs 2021</MenuText2>
   <MenuText2>Mellow Songs</MenuText2>
   <MenuText2>Anime Lofi & Chillhop Music</MenuText2>
   <MenuText2>BG Afro “Select” Vibes</MenuText2>
   <MenuText2>Afro “Select” Vibes</MenuText2>
   <MenuText2>Happy Hits!</MenuText2>
   <MenuText2>Deep Focus</MenuText2>
   <MenuText2>Instrumental Study</MenuText2>
   <MenuText2>OST Compilations</MenuText2>
   <MenuText2>Nostalgia for old souled mill...</MenuText2>
   <MenuText2>Mixed Feelings</MenuText2>
   </MenuTextWrapper>
   </LeftSide>
  )
}

export default LeftSidebar