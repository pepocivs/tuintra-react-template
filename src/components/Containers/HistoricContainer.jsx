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
  return (
    <>
      <Title shadow="Histórico competiciones">Palmarés</Title>
      <GridBox>
        {Object.keys(historic.data).map(category => {
          const categorySlug = slugify(category);
          const subSection = (match.params.subsection) ? `/${match.params.subsection}`: '';
          return (
            <Link key={categorySlug} to={`${subSection}/palmares/${categorySlug}`}>
              <Highlighted selected={categorySlug === match.params.id}>{category}</Highlighted>
            </Link>
            )
          })
        }
      </GridBox>
      <br />
      <HistoricCards leagues={historic.data[unSlug(categoryId)]}/>
    </>
  )
}
export default withRouter(HistoricContainer);