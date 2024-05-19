import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
width: calc(100% / 4);
padding: 17px;
border-radius: 8px;
background-color: rgb(255, 255, 255, 0.09);
margin-bottom: 100px;
transition: 0.4s ease;
cursor: pointer;
&:hover{
  background-color: rgb(255, 255, 255, 0.2);
}
`

const Title = styled.h3`
font-size: 20px;
font-weight: 700;
line-height: 25.3px;
letter-spacing: 0.03em;
margin-top: 20px;
margin-bottom: 12px;
color: #fff;
`

const Text = styled.p`
color: #B3B3B3;
font-size: 18px;
font-weight: 450;
line-height: 22.77px;
margin: 0;
`

const SongCard = ({ imageSrc, title, text }) => {
  return (
    <Card>
    <img src={imageSrc} alt={title} width={182} height={182}/>
    <Title>{title}</Title>
    <Text>{text}</Text>
    </Card>
    )
  }

  export default SongCard