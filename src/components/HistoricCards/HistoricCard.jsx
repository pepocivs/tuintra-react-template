import React from "react";
import styled from "styled-components";

/** Custom components */
import SvgIcon from "components/UI/SvgIcon/SvgIcon";

const HistoricContainer = styled.div`
   background-color: ${({theme, reverse}) => (reverse) 
    ? theme.colors.grey 
    : theme.colors.light
  };
  display: grid;
  grid-template-columns: ${({reverse}) => (reverse) ? "2fr 1fr" : "1fr 2fr"};
  min-height: 300px;
  padding: 30px;
  div:nth-of-type(1) {
    order: ${({reverse}) => (reverse) ? 2 : 1};
  }
  div:nth-of-type(2) {
    order: ${({reverse}) => (reverse) ? 1 : 2};
  }
`;

const ScoreCount = styled.div`
  align-self: center;
  margin: auto;
  position: relative;
  svg {
    width: 150px;
    margin-right: 10px;
  }
`;

const Victories = styled.div`
  font-size: 150px;
  position: absolute;
  left: 0px;
  color: ${({theme}) => theme.clubOptions.principal_color_web};
  opacity: 0.8;
`;

const TitleCount = styled.span`
  color: ${({theme}) => theme.clubOptions.principal_color_web};
  font-size: 20px;
`;

const Key = styled.span`
  font-weight: 900;
  font-size: 20px;
`;
const Seasons = styled.span`
  color: ${({theme}) => theme.clubOptions.secundary_color_web};
`;

function HistoricCard({reverse, title, sportId, ambit, positions}) {
  return (
    <HistoricContainer reverse={reverse}>
      <ScoreCount>
        <Victories>{(positions[1]) ? positions[1].length : 0}</Victories>
        <SvgIcon 
          color="#555555"
          secondaryBgColor={(sportId === 1) ? '#b9f3b9' :  '#B9D6F3'}
          bgColor="transparent"
          name={ambit} />
      </ScoreCount>
      <div>
        <h1>{title}</h1>
        {Object.keys(positions).map(position => {
          const trophys = positions[position].length;
          return (
            <p key={position}>
              <Key><TitleCount>{trophys}</TitleCount> - {getPosition(position, trophys)}:</Key>
              <br />
              <Seasons>{positions[position].join(', ')}</Seasons>
            </p>);
        })}
      </div>
    </HistoricContainer>
  )
}

function getPosition(position, number) {
  let formattedPosition = '';
  switch (position) {
    case "1":
      formattedPosition = (number === 1) ? `Campeonato` : `Campeonatos`;
      break;
    case "2":
      formattedPosition = (number === 1) ? `Sub campeonato` : `Sub campeonatos`;
      break;
    case "3":
      formattedPosition = (number === 1) ? `Medalla de bronce` : `Medallas de bronce`;
      break;
    default:
      formattedPosition = (number === 1) ? `${position}ª posicion` : `${position}ªs posiciones`;
      break;
  }
  return formattedPosition;
}

export default HistoricCard;
