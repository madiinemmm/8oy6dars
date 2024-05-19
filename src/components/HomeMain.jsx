import React from 'react'
import styled from '@emotion/styled'
import SongCard from './SongCard'
import Img1 from '../assets/Cardimg1.png'
import Img2 from '../assets/Cardimg2.png'
import Img3 from '../assets/Cardimg3.png'
import Img4 from '../assets/Cardimg4.png'

const MusicCardsWrapper = styled.div`
width: 948px;
margin: 0 auto; */
`

const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 20px;
`

const Title = styled.h3`
font-size: 30px;
font-weight: 700;
line-height: 37.95px;
letter-spacing: -0.03em;
color: #fff;
`
const LinkAll = styled.a`
font-size: 16px;
font-weight: 700;
line-height: 20.24px;
letter-spacing: 0.08em;
color: #ADADAD;
text-transform: uppercase;
cursor: pointer;
&:hover{
  opacity: 0.7;
}
`

const Main = styled.div`
display: flex;
gap: 20px;
`

const HomePageMain = () => {
  return (
    <MusicCardsWrapper>
    <Top>
    <Title>Your top mixes</Title>
    <LinkAll>see all</LinkAll>
    </Top>

<Main>
<SongCard imageSrc={Img1} title={"Chill Mix"} text={"Julia Wolf, Khalid, ayokay and more"}/>
<SongCard imageSrc={Img2} title={"Pop Mix"} text={"Ayra Starr, Lil Kesh, Ed Sheeran and more"}/>
<SongCard imageSrc={Img3} title={"Pheelz Mix"} text={"FRENSHIP, Brooke Sierra, Julia Wolf an..."}/>
<SongCard imageSrc={Img4} title={"Pop Indie "} text={"Hey Violet, VÉRITÉ, Timeflies and more"}/>
</Main>
    </MusicCardsWrapper>
    )
  }

  export default HomePageMain