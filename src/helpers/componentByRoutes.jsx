/** Containers */
import HomeContainer from "components/Containers/HomeContainer";
import ClubContainer from "components/Containers/ClubContainer";
import ContactContainer from "components/Containers/ContactContainer";
import HistoryContainer from "components/Containers/HistoryContainer";
import DocumentationContainer from "components/Containers/DocumentationContainer";
import DirectiveContainer from "components/Containers/DirectiveContainer";
import HistoricContainer from "components/Containers/HistoricContainer";
import NotFound from 'components/Containers/NotFound';

/** Connected Containers */
import NewsContainer from "components/Connectors/ConnectedNews";
import TeamsContainer from "components/Connectors/ConnectedTeams";
import CompetitionsContainer from "components/Connectors/ConnectedCompetitions";
import LinksContainer from "components/Connectors/ConnectedLinks";

const components = {
  equipos: TeamsContainer,
  noticias: NewsContainer,
  competiciones: CompetitionsContainer,
  contacto: ContactContainer,
  club: ClubContainer,
  historia: HistoryContainer,
  documentos: DocumentationContainer,
  directiva: DirectiveContainer,
  palmares: HistoricContainer,
  links: LinksContainer,
  inicio: HomeContainer
};

export default route => {
  return components[route] || NotFound;
}