/** Containers */
import HomeContainer from "components/Containers/HomeContainer";
import TeamsContainer from "components/Containers/TeamsContainer";
import NewsContainer from "components/Containers/NewsContainer";
import CompetitionsContainer from "components/Containers/CompetitionsContainer";
import ClubContainer from "components/Containers/ClubContainer";
import LinksContainer from "components/Containers/LinksContainer";
import ContactContainer from "components/Containers/ContactContainer";
import HistoryContainer from "components/Containers/HistoryContainer";
import DocumentationContainer from "components/Containers/DocumentationContainer";
import DirectiveContainer from "components/Containers/DirectiveContainer";
import HistoricContainer from "components/Containers/HistoricContainer";
import NotFound from 'components/Containers/NotFound';

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