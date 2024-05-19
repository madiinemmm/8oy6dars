import React from 'react';
import styled from '@emotion/styled'

const Card = styled.div`
  background-color: rgb(255, 255, 255, 0.1);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover{
    background-color: rgb(255, 255, 255, 0.4);
  }
`;

const CardTitle = styled.h4`
font-size: 20px;
font-weight: 700;
line-height: 25.3px;
letter-spacing: 0.01em;
color: #fff;
padding: 30px
`

const MusicCard = ({ imageSrc, title }) => {
  return (
    <Card>
      <img src={imageSrc} alt={title} />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default MusicCard;
