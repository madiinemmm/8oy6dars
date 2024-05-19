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
padding-top: 70px;
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
   </LeftSide>
  )
}

export default LeftSidebar