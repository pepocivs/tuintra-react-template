/* eslint-disable no-restricted-globals */
const getDomainEquivalences = () => {
  const equivalences = {
    'localhost': 'demo',
    'ginerdelosrios.es': 'ginerdelosrios',
    'inefhockey.com': 'inef',
    'chmadrid.es': 'chmadrid'
  };
  return equivalences[location.hostname] || 'demo';
}
const subdomain = getDomainEquivalences();
export default {
  apiHost: 'https://api.tuintra.com',
  subdomain,
  tuintraDomain: (subdomain.includes('.')) ? `http://www.${subdomain}` : `${subdomain}.tuintra.com`
}