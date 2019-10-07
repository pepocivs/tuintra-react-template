/** Containers */
import HomeContainer from "components/Containers/HomeContainer";
import ClubContainer from "components/Containers/ClubContainer";
import DocumentationContainer from "components/Containers/DocumentationContainer";
import NotFound from 'components/Containers/NotFound';

/** Connected Containers */
import NewsContainer from "components/Connectors/ConnectedNews";
import TeamsContainer from "components/Connectors/ConnectedTeams";
import CompetitionsContainer from "components/Connectors/ConnectedCompetitions";
import LinksContainer from "components/Connectors/ConnectedLinks";
import DirectiveContainer from "components/Connectors/ConnectedDirective";
import HistoricContainer from "components/Connectors/ConnectedHistoric";
import PagesContainer from "components/Connectors/ConnectedPages";
import ContactContainer from "components/Connectors/ConnectedContact";

const components = {
  equipos: TeamsContainer,
  noticias: NewsContainer,
  competiciones: CompetitionsContainer,
  contacto: ContactContainer,
  club: ClubContainer,
  historia: PagesContainer,
  documentos: DocumentationContainer,
  directiva: DirectiveContainer,
  palmares: HistoricContainer,
  links: LinksContainer,
  page: PagesContainer,
  inicio: HomeContainer
};

export default route => {
  return components[route] || NotFound;
}