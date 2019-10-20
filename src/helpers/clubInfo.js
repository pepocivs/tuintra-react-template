const subdomain = 'ginerdelosrios';
export default {
  apiHost: 'https://api.tuintra.com',
  subdomain,
  tuintraDomain: (subdomain.includes('.')) ? `http://www.${subdomain}` : `${subdomain}.tuintra.com`
}