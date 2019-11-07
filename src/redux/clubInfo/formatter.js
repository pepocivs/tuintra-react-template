export default (data) => {
  if (!data[0]) return [];
  return {
    clubInfo: getClubInfo(data[0]),
    menu: data[0].menu,
    widgets: data[0].widgets
  };
}

function getClubInfo(data) {
  return {
    clubName: data.clubName,
    clubType: data.clubType,
    clubFundation: data.clubFundation,
    currentSeason: data.currentSeason,
    contact: data.contact,
    analyticsCode: data.analyticsCode,
    options: {
      clubs_shield: data.options.clubs_shield,
      clubs_logo: data.options.clubs_logo,
      favicon: data.options.favicon,
      principal_color_web: data.options.principal_color_web,
      secundary_color_web: data.options.secundary_color_web,
      third_color_web: data.options.third_color_web
    },
    social: {
      facebook: data.options.facebook,
      twitter: data.options.twitter,
      youtube: data.options.youtube,
      instagram: data.options.instagram,
      flickr: data.options.flickr
    }
  }
}