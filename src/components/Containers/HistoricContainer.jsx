import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

/** Custom Component */
import Loading from "components/Containers/Loading";
import Alert from "components/UI/Alert/Alert";
import Highlighted from "components/UI/Highlighted/Highlighted";
import Title from "components/UI/Title/Title";
import GridBox from "components/UI/GridBox/GridBox";
import HistoricCards from "components/HistoricCards/HistoricCards";

/** Helpers */
import { slugify, unSlug } from "helpers/slugify";

const TwoColumns = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto auto;
  justify-content: space-between;
  @media (max-width: ${({theme}) => theme.breakpoints.tabletLandscape - 1}px) {
    grid-template-columns: auto;
    grid-gap: 0px;
  }
`;

function HistoricContainer({fetchHistoric, historic, match}) {
  useEffect(() => {
    fetchHistoric();
  }, [fetchHistoric]);
  if (!historic.ready) return <Loading />;
  const categoryId = match.params.id || 'senior-masculino';
  const historicData = (Object.keys(historic.data).length > 0)
    ? historic.data.find(data => data.categoryName === unSlug(categoryId))
    : [];
  return (
    <>
      <Title shadow="Histórico competiciones">Palmarés</Title>
      {(Object.keys(historic.data).length === 0)
        ? <Alert icon="info" iconColor="#aec6cf" msg="No existe palmarés para mostrar" />
        : <>
          <GridBox>
            {historic.data.map(categoryData => {
              const categorySlug = slugify(categoryData.categoryName);
              const subSection = (match.params.subsection) ? `/${match.params.subsection}`: '';
              return (
                <Link key={categorySlug} to={`${subSection}/palmares/${categorySlug}`}>
                  <Highlighted selected={categorySlug === categoryId}>{categoryData.categoryName}</Highlighted>
                </Link>
                )
              })
            }
          </GridBox>
          <br />
          {(historicData.hasBoth)
            ? <TwoColumns>
                <div><HistoricCards leagues={historicData.historicNational}/></div>
                <div><HistoricCards leagues={historicData.historicLocal}/></div>
              </TwoColumns>
            : <HistoricCards leagues={historicData.historic}/>
          }
        </>
      }
    </>
  )
}
export default withRouter(HistoricContainer);