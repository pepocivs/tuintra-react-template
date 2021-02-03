import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/** Custom Components */
import Title from "components/UI/Title/Title";
import Card from "components/UI/Card/Card";
import Alert from "components/UI/Alert/Alert";

/** Helpers */
import { groupBy } from "../../helpers/groupBy";

const CompetitionContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 150px);
  grid-gap: 20px;
  justify-content: flex-start;
  text-align: center;
  font-size: 10px;
  @media (max-width: ${({theme}) => theme.breakpoints.desktop}px) {
    justify-content: space-around;
  }
`;

function CompetitionList({competitions}) {
  return (
    <>
      <Title shadow="Competiciones">Competiciones</Title>
      {(Object.keys(competitions).length === 0)
        ? <Alert icon="info" iconColor="#aec6cf" msg="No se han encontrado competiciones" />
        : competitionContainer(competitions)
      }
    </>
  )
}

function groupCompetitions(competitions) {
  const groupedByScopeCompetitions = groupBy(competitions, 'scope');
  const competitionScopes = Object.keys(groupedByScopeCompetitions);
  const groupedCompetitions = {};
  competitionScopes.map(scope => groupedCompetitions[scope] = groupBy(groupedByScopeCompetitions[scope], 'category'));
  return { groupedCompetitions, competitionScopes, groupedByScopeCompetitions };
}

function competitionContainer(competitions) {
  const templateType = getTemplate(competitions);
  console.log(templateType);
  const { groupedByScopeCompetitions, groupedCompetitions, competitionScopes } = groupCompetitions(competitions);

  switch (templateType) {
    case 'group-by-category':
      return competitionScopes.map(scope => {
        const categoryKeys = Object.keys(groupedCompetitions[scope]);
        return (
          <div key={scope}>
            <h1>Competición {scope}</h1>
            {categoryKeys.map(category => (
              <div key={category}>
                <h3>{category}</h3>
                {printCompetitionContainer(groupedCompetitions[scope][category])}
              </div>
            ))}
          </div>
        );
      })
    case 'group-by-scope':
      return competitionScopes.map(scope => {
        return (
          <div key={scope}>
            <h1>Competición {scope}</h1>
            {printCompetitionContainer(groupedByScopeCompetitions[scope])}
          </div>
        );
      })
    case 'no-group':
    default:
      return printCompetitionContainer(competitions);
  }
}

function getTemplate(competitions) {
  const { groupedCompetitions } = groupCompetitions(competitions);
  if (Object.keys(groupedCompetitions).length > 1) {
    let hasDifferentCategory = false;
    Object.keys(groupedCompetitions).map(scope => {
      return Object.keys(groupedCompetitions[scope]).map(category => {
        const categories = Array.from(groupedCompetitions[scope][category].reduce((m, {category}) => m.set(category, (m.get(category) || 0) + 1), new Map()), ([category, value]) => ({category, value}));
        const totalCategories = categories.reduce((prev, cur) => prev + cur.value, 0);
        if (totalCategories > categories.length) hasDifferentCategory = true;
        return hasDifferentCategory;
      })
    });
    return (hasDifferentCategory) ? 'group-by-category' : 'group-by-scope';
  } else {
    return 'no-group';
  }
}

function printCompetitionContainer(content) {
  return <CompetitionContainer>{content.map(printCompetitionLink)}</CompetitionContainer>;
}

function printCompetitionLink(competition) {
  return (
    <Link key={competition._id} to={`/competiciones/${competition._id}`}>
      <Card
        bgImage={`/assets/competitions/${competition.icon}`}
        title={competition.competitionName}
        subtitle={`${competition.category} ${competition.gender}`}
        width="150px"
        height="150px">
      </Card>
    </Link>
  )
}

export default CompetitionList;