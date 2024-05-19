import React from 'react'
import styled from '@emotion/styled'
import MusicCard from './MusicCard'
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'
import Img4 from '../assets/img4.png'
import Img5 from '../assets/img5.png'
import Img6 from '../assets/img6.png'
import Left from '../assets/left.png'
import Right from '../assets/right.png'
const Hero = styled.div`
width: 100%;
padding: 25px 40px;
background-image: linear-gradient(180deg, #3333A3 20.09%, #121212 83.4%);
margin-bottom: 20px;
`

const Top = styled.div`
display: flex;
gap: 20px;
margin-bottom: 40px;

`

const Button = styled.button`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: rgb(0, 0, 0, 0.5);
border: none;
padding: 0;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

&:hover {
  opacity: 0.6;
}
`

const Title = styled.h2`
color: #fff;
font-size: 39px;
font-weight: 700;
line-height: 49.33px;
letter-spacing: -0.01em;
margin-bottom: 20px; 

`

const MusicCardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 20px;
  
`



const HomePageHero = () => {
  return (
    <Hero>
    <Top>
    <Button><img src={Left} width={13} height={23}/></Button>
    <Button><img src={Right} width={13} height={23}/></Button>
    </Top>
<Title>Good afternoon</Title>

<MusicCardWrapper>
<MusicCard  imageSrc={Img1} title={"Chill Mix"}/>
<MusicCard imageSrc={Img4} title={"Pop Mix"}/>
<MusicCard imageSrc={Img2} title={"Daily Mix 1"}/>
<MusicCard imageSrc={Img5} title={"Daily Mix 5"}/>
<MusicCard imageSrc={Img3} title={"Folk & Acoustic Mix"}/>
<MusicCard imageSrc={Img6} title={"Daily Mix 4"}/>
</MusicCardWrapper>

    </Hero>
    )
  }

  export default HomePageHero