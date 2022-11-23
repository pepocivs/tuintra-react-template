/** Containers */
import ClubContainer from "components/Containers/ClubContainer";
import NotFound from 'components/Containers/NotFound';

/** Connected Containers */
import NewsContainer from "components/Connectors/ConnectedNews";
import TeamsContainer from "components/Connectors/ConnectedTeams";
import StreamsContainer from "components/Connectors/ConnectedStreams";
import NextGamesContainer from "components/Containers/NextGamesContainer";
import ResourcesContainer from "components/Containers/ResourcesContainer";
import ShopContainer from "components/Connectors/ConnectedShop";
import CompetitionsContainer from "components/Connectors/ConnectedCompetitions";
import LinksContainer from "components/Connectors/ConnectedLinks";
import DirectiveContainer from "components/Connectors/ConnectedDirective";
import HistoricContainer from "components/Connectors/ConnectedHistoric";
import PagesContainer from "components/Connectors/ConnectedPages";
import ContactContainer from "components/Connectors/ConnectedContact";
import HomeContainer from "components/Connectors/ConnectedHome";
import DocumentationContainer from "components/Connectors/ConnectedDocumentation";
import LegalAdviceContainer from "components/Connectors/ConnectedLegalAdvice";
import PrivacyPolicyContainer from "components/Connectors/ConnectedPrivacyPolicy";
import CookiesPolicyContainer from "components/Connectors/ConnectedCookiesPolicy";


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
  inicio: HomeContainer,
  avisoLegal: LegalAdviceContainer,
  politicaPrivacidad: PrivacyPolicyContainer,
  politicaCookies: CookiesPolicyContainer,
  streams: StreamsContainer,
  nextGames: NextGamesContainer,
  resources: ResourcesContainer,
  shop: ShopContainer,
};

export default route => {
  return components[route] || NotFound;
}