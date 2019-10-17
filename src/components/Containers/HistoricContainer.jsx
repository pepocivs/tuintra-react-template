import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

/** Custom Component */
import Highlighted from "components/UI/Highlighted/Highlighted";
import Title from "components/UI/Title/Title";
import GridBox from "components/UI/GridBox/GridBox";
import HistoricCards from "components/HistoricCards/HistoricCards";

/** Helpers */
import { slugify, unSlug } from "helpers/slugify";

function HistoricContainer({fetchHistoric, historic, match}) {
  useEffect(() => {
    fetchHistoric();
  }, [fetchHistoric]);
  if (!historic.ready) return null;
  const categoryId = match.params.id || 'senior-masculino';
  const historicData = historic.data.find(data => data.categoryName === unSlug(categoryId));
  return (
    <>
      <Title shadow="Histórico competiciones">Palmarés</Title>
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
      <HistoricCards leagues={(historicData) ? historicData.historic : {} }/>
    </>
  )
}
export default withRouter(HistoricContainer);