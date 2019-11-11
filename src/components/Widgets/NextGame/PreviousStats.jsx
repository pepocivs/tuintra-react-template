import React from "react";
import styled from "styled-components";

const LastResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LastResultBox = styled.div`
  border-radius: 5px;
  padding: ${({index}) => (index === 4) ? '4px': '3px'};
  margin: 1px;
  width: ${({index}) => (index === 4) ? '24px': '20px'};
  height: ${({index}) => (index === 4) ? '24px': '20px'};
  cursor: pointer;
  border: 1px solid ${({type, theme}) => 
    (type === 'P') 
      ? theme.colors.dangerSecondary
      : (type === 'G') 
        ? theme.colors.successSecondary
        : (type === 'E')
          ? theme.colors.warningSecondary
          : theme.colors.dark
  };
  text-align: center;
  font-weight: bold;
  color: ${({type, theme}) => (type === '-') 
    ? theme.colors.black 
    : theme.colors.white
  };
  background-color: ${({type, theme}) => 
    (type === 'P') 
      ? theme.colors.danger 
      : (type === 'G') 
        ? theme.colors.success 
        : (type === 'E')
          ? theme.colors.warning
          : theme.colors.light
  };
`;

function PreviousStats({data}) {
  const blankSpaces = ((5 - data.length) < 0) ? 0 : (5 - data.length);
  for (let x = 0; x < blankSpaces; x++) {
    data.unshift({
      date: '',
      stand: '-',
      local: '',
      localLetter: '',
      localScore: '',
      away: '',
      awayLetter: '',
      awayScore: '',
    })
  }
  var variance = (data.length - 5);
  return (
    <LastResultContainer>
      {data.slice(variance, 5+variance).map((lastResult, index) => {
        return (
          <LastResultBox 
            key={`${lastResult.gameId}-${Math.floor(Math.random() * 99999)}`}
            index={index}
            type={lastResult.stand}
            title={`${lastResult.date}
${lastResult.local} ${lastResult.localLetter} ${lastResult.localScore} - ${lastResult.awayScore} ${lastResult.away} ${lastResult.awayLetter}`}>
            {lastResult.stand}
          </LastResultBox>
        );
      })}
    </LastResultContainer>
  )
}

export default PreviousStats;
