import React from "react";
import styled from "styled-components";

/** Custom Component */
import Card from "components/UI/Card/Card";
import Title from "components/UI/Title/Title";

const SeasonContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 100px);
`;

function HistoricContainer({historic}) {
  return (
    <>
      <Title shadow="Histórico competiciones">Palmarés</Title>
      {Object.keys(historic).map(season => (
        <div key={season}>
        <h3>{season}</h3>
        <SeasonContainer>
          {historic[season].map(yearResults => {
            const position = (yearResults.position <= 3) ? yearResults.position : 4;
            const image = `/assets/historic/${yearResults.ambit.toLowerCase()}-${position}.png`;
            return (
              <Card
                key={yearResults._id}
                title={`${yearResults.position}º`}
                subtitle={yearResults.team}
                outerText={yearResults.competition}
                bgImage={image}
                width="100px"
                height="100px">
              </Card>
            )
          }
          )}
        </SeasonContainer>
      </div>
      ))}
    </>
  )
}
export default HistoricContainer;