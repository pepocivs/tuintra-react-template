/* eslint-disable no-restricted-globals */
const getDomainEquivalences = () => {
  const equivalences = {
    'localhost': 'demo',
    'ginerdelosrios.es': 'ginerdelosrios',
    'inefhockey.com': 'inef',
    'chmadrid.es': 'chmadrid',
    'chmlasrozas.es': 'chmadrid',
    'fsquart.tuintra.es': 'fsquart',
    'chpozuelo.tuintra.es': 'chpozuelo'
  };
  return equivalences[location.hostname] || 'demo';
}
const subdomain = getDomainEquivalences();
export default {
  apiHost: 'https://api.tuintra.com',
  subdomain,
  tuintraDomain: (subdomain.includes('.')) ? `http://www.${subdomain}` : `${subdomain}.tuintra.com`,
  publicUrl: (location.hostname.includes('.')) ? `https://www.${location.hostname}` : `https://${subdomain}.tuintra.com`,
}