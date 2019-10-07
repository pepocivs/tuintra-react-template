import React from "react";
import styled from "styled-components";

/** Helpers */
import { slugify } from "helpers/slugify";

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
const Seasons = styled.div`
  color: ${({theme}) => theme.clubOptions.secundary_color_web};
`;

function HistoricCard({reverse, title, positions}) {
  return (
    <HistoricContainer reverse={reverse}>
      <ScoreCount>
        <Victories>{(positions[1]) ? positions[1].length : 0}</Victories>
        <SvgIcon color="#555555" secondaryBgColor={getSportColor(title)} bgColor="transparent" name={getTrophy(title)} />
      </ScoreCount>
      <div>
        <h1>{title}</h1>
        {Object.keys(positions).map(position => {
          const trophys = positions[position].length;
          return (
            <p key={position}>
              <Key><TitleCount>{trophys}</TitleCount> - {getPosition(position, trophys)}:</Key>
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

function getTrophy(title) {
  const iconEquivalences = {
    fase: 'diploma',
    sector: 'diploma',
    dha: 'ligaNacional',
    dhb: 'ligaNacional',
    nacional: 'ligaNacional',
    division: 'liga',
    liga: 'liga',
    copa: 'copa',
    trofeo: 'copa',
    cto: 'ligaNacional'
  };
  let icon = null;
  // eslint-disable-next-line array-callback-return
  Object.keys(iconEquivalences).map(slug => {
    if (slugify(title).includes(slug) && !icon) 
      icon = iconEquivalences[slug];
  });
  return icon;
}

function getSportColor(title) {
  return (slugify(title).includes('sala')) ? '#B9D6F3' : '#b9f3b9';
}

export default HistoricCard;
