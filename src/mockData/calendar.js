function formatCalendar(calendar) {
  const formatedCalendar = {};
  calendar.map(game => {
    if (!formatedCalendar[game.gameDay]) formatedCalendar[game.gameDay] = [];
    return formatedCalendar[game.gameDay].push({
      _id: game._id,
      date: game.date,
      time: game.time,
      local: game.local.name,
      localShield: game.local.shield[100],
      away: game.away.name,
      awayShield: game.away.shield[100],
      localScore: game.localScore,
      awayScore: game.awayScore,
      facility: game.facility
    });
  });
  return formatedCalendar;
}

export default formatCalendar([
  {
    _id: 4120,
    gameDay: 1,
    date: "2018-09-14",
    time: "09:00",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 5,
    awayScore: 1,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4121,
    gameDay: 1,
    date: "2018-09-15",
    time: "02:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4122,
    gameDay: 1,
    date: "2018-09-15",
    time: "02:30",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4123,
    gameDay: 1,
    date: "2018-09-15",
    time: "02:45",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4124,
    gameDay: 1,
    date: "2018-09-15",
    time: "03:00",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 4,
    awayScore: 2,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4125,
    gameDay: 1,
    date: "2018-09-15",
    time: "03:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 4,
    awayScore: 2,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4126,
    gameDay: 2,
    date: "2018-09-21",
    time: "08:30",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 3,
    awayScore: 1,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4127,
    gameDay: 2,
    date: "2018-09-22",
    time: "02:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4128,
    gameDay: 2,
    date: "2018-09-22",
    time: "02:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4129,
    gameDay: 2,
    date: "2018-09-22",
    time: "03:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 2,
    awayScore: 2,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4130,
    gameDay: 2,
    date: "2018-09-22",
    time: "04:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 3,
    awayScore: 4,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4131,
    gameDay: 2,
    date: "2018-09-22",
    time: "04:30",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 3,
    awayScore: 4,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4132,
    gameDay: 3,
    date: "2018-09-28",
    time: "08:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4133,
    gameDay: 3,
    date: "2018-09-28",
    time: "09:00",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 3,
    awayScore: 1,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4134,
    gameDay: 3,
    date: "2018-09-28",
    time: "09:15",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4135,
    gameDay: 3,
    date: "2018-09-29",
    time: "02:30",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 5,
    awayScore: 3,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4136,
    gameDay: 3,
    date: "2018-09-29",
    time: "04:00",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4137,
    gameDay: 3,
    date: "2018-09-29",
    time: "04:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 3,
    awayScore: 4,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4138,
    gameDay: 4,
    date: "2018-10-05",
    time: "08:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4139,
    gameDay: 4,
    date: "2018-10-06",
    time: "02:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 2,
    awayScore: 4,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4140,
    gameDay: 4,
    date: "2018-10-06",
    time: "03:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 2,
    awayScore: 2,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4141,
    gameDay: 4,
    date: "2018-10-06",
    time: "03:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4142,
    gameDay: 4,
    date: "2018-10-06",
    time: "04:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 1,
    awayScore: 4,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4143,
    gameDay: 4,
    date: "2018-10-06",
    time: "04:30",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 3,
    awayScore: 3,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4144,
    gameDay: 5,
    date: "2018-10-12",
    time: "08:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 4,
    awayScore: 2,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4145,
    gameDay: 5,
    date: "2018-10-12",
    time: "08:30",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4146,
    gameDay: 5,
    date: "2018-10-12",
    time: "09:15",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4147,
    gameDay: 5,
    date: "2018-10-13",
    time: "02:30",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4148,
    gameDay: 5,
    date: "2018-10-13",
    time: "04:30",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4149,
    gameDay: 5,
    date: "2018-10-13",
    time: "04:30",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4150,
    gameDay: 6,
    date: "2018-10-19",
    time: "08:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 2,
    awayScore: 3,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4151,
    gameDay: 6,
    date: "2018-10-20",
    time: "02:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4152,
    gameDay: 6,
    date: "2018-10-20",
    time: "02:30",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 0,
    awayScore: 6,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4153,
    gameDay: 6,
    date: "2018-10-20",
    time: "04:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 1,
    awayScore: 2,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4154,
    gameDay: 6,
    date: "2018-10-20",
    time: "04:30",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 4,
    awayScore: 4,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4155,
    gameDay: 6,
    date: "2018-10-20",
    time: "05:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4156,
    gameDay: 7,
    date: "2018-10-26",
    time: "07:00",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 2,
    awayScore: 2,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4157,
    gameDay: 7,
    date: "2018-10-26",
    time: "08:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 6,
    awayScore: 2,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4158,
    gameDay: 7,
    date: "2018-10-27",
    time: "03:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 2,
    awayScore: 3,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4159,
    gameDay: 7,
    date: "2018-10-27",
    time: "03:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 1,
    awayScore: 2,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4160,
    gameDay: 7,
    date: "2018-10-27",
    time: "04:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 1,
    awayScore: 5,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4161,
    gameDay: 7,
    date: "2018-10-27",
    time: "04:30",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 3,
    awayScore: 4,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4162,
    gameDay: 8,
    date: "2018-11-09",
    time: "09:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 6,
    awayScore: 4,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4163,
    gameDay: 8,
    date: "2018-11-09",
    time: "09:00",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 2,
    awayScore: 0,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4164,
    gameDay: 8,
    date: "2018-11-10",
    time: "02:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4165,
    gameDay: 8,
    date: "2018-11-10",
    time: "03:00",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4166,
    gameDay: 8,
    date: "2018-11-10",
    time: "03:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4167,
    gameDay: 8,
    date: "2018-11-10",
    time: "04:30",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4168,
    gameDay: 9,
    date: "2018-11-16",
    time: "08:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 2,
    awayScore: 2,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4169,
    gameDay: 9,
    date: "2018-11-16",
    time: "08:30",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 0,
    awayScore: 1,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4170,
    gameDay: 9,
    date: "2018-11-17",
    time: "02:45",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 2,
    awayScore: 3,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4171,
    gameDay: 9,
    date: "2018-11-17",
    time: "03:00",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4172,
    gameDay: 9,
    date: "2018-11-17",
    time: "03:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 2,
    awayScore: 4,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4173,
    gameDay: 9,
    date: "2018-11-17",
    time: "04:30",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 2,
    awayScore: 3,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4174,
    gameDay: 10,
    date: "2018-11-23",
    time: "07:00",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4176,
    gameDay: 10,
    date: "2018-11-23",
    time: "08:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4177,
    gameDay: 10,
    date: "2018-11-23",
    time: "08:30",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 3,
    awayScore: 1,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4178,
    gameDay: 10,
    date: "2018-11-24",
    time: "02:30",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 1,
    awayScore: 0,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4179,
    gameDay: 10,
    date: "2018-11-24",
    time: "03:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 2,
    awayScore: 2,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4180,
    gameDay: 10,
    date: "2018-11-24",
    time: "04:30",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4181,
    gameDay: 11,
    date: "2018-11-30",
    time: "08:00",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4182,
    gameDay: 11,
    date: "2018-11-30",
    time: "09:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 2,
    awayScore: 0,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4183,
    gameDay: 11,
    date: "2018-12-01",
    time: "03:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 3,
    awayScore: 4,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4184,
    gameDay: 11,
    date: "2018-12-01",
    time: "03:30",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 1,
    awayScore: 3,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4185,
    gameDay: 11,
    date: "2018-12-01",
    time: "04:30",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 3,
    awayScore: 6,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4186,
    gameDay: 11,
    date: "2018-12-01",
    time: "05:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4187,
    gameDay: 12,
    date: "2019-02-15",
    time: "16:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 3,
    awayScore: 3,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4188,
    gameDay: 12,
    date: "2019-02-16",
    time: "02:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 2,
    awayScore: 0,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4189,
    gameDay: 12,
    date: "2019-02-16",
    time: "03:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 3,
    awayScore: 1,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4190,
    gameDay: 12,
    date: "2019-02-16",
    time: "04:30",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4191,
    gameDay: 12,
    date: "2019-02-16",
    time: "04:30",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 4,
    awayScore: 3,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4192,
    gameDay: 12,
    date: "2019-02-16",
    time: "05:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 2,
    awayScore: 2,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4193,
    gameDay: 13,
    date: "2019-02-22",
    time: "08:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 2,
    awayScore: 0,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4194,
    gameDay: 13,
    date: "2019-02-22",
    time: "09:00",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4195,
    gameDay: 13,
    date: "2019-02-22",
    time: "09:00",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4196,
    gameDay: 13,
    date: "2019-02-23",
    time: "02:30",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4197,
    gameDay: 13,
    date: "2019-02-23",
    time: "03:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 1,
    awayScore: 2,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4198,
    gameDay: 13,
    date: "2019-02-23",
    time: "04:30",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 6,
    awayScore: 0,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4199,
    gameDay: 14,
    date: "2019-03-01",
    time: "08:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4200,
    gameDay: 14,
    date: "2019-03-02",
    time: "02:00",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 2,
    awayScore: 0,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4201,
    gameDay: 14,
    date: "2019-03-02",
    time: "04:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 2,
    awayScore: 3,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4202,
    gameDay: 14,
    date: "2019-03-02",
    time: "04:30",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 4,
    awayScore: 2,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4203,
    gameDay: 14,
    date: "2019-03-02",
    time: "04:30",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4204,
    gameDay: 14,
    date: "2019-03-02",
    time: "04:30",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4205,
    gameDay: 15,
    date: "2019-03-08",
    time: "08:30",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 2,
    awayScore: 4,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4206,
    gameDay: 15,
    date: "2019-03-09",
    time: "02:30",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4207,
    gameDay: 15,
    date: "2019-03-09",
    time: "02:30",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4208,
    gameDay: 15,
    date: "2019-03-09",
    time: "03:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 4,
    awayScore: 0,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4209,
    gameDay: 15,
    date: "2019-03-09",
    time: "03:00",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4210,
    gameDay: 15,
    date: "2019-03-09",
    time: "04:30",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4211,
    gameDay: 16,
    date: "2019-03-15",
    time: "08:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 3,
    awayScore: 3,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4212,
    gameDay: 16,
    date: "2019-03-15",
    time: "08:00",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4213,
    gameDay: 16,
    date: "2019-03-15",
    time: "08:00",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 0,
    awayScore: 1,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4214,
    gameDay: 16,
    date: "2019-03-16",
    time: "02:00",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 3,
    awayScore: 3,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4215,
    gameDay: 16,
    date: "2019-03-16",
    time: "04:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4216,
    gameDay: 16,
    date: "2019-03-16",
    time: "04:30",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4217,
    gameDay: 17,
    date: "2019-03-29",
    time: "08:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 3,
    awayScore: 3,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4218,
    gameDay: 17,
    date: "2019-03-29",
    time: "08:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 1,
    awayScore: 2,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4219,
    gameDay: 17,
    date: "2019-03-29",
    time: "09:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 1,
    awayScore: 0,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4220,
    gameDay: 17,
    date: "2019-03-29",
    time: "09:00",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 9,
    awayScore: 1,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4221,
    gameDay: 17,
    date: "2019-03-30",
    time: "02:30",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4222,
    gameDay: 17,
    date: "2019-03-30",
    time: "04:30",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4223,
    gameDay: 18,
    date: "2019-04-05",
    time: "05:00",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 3,
    awayScore: 0,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4224,
    gameDay: 18,
    date: "2019-04-05",
    time: "08:00",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 2,
    awayScore: 1,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4225,
    gameDay: 18,
    date: "2019-04-05",
    time: "09:00",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 1,
    awayScore: 3,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4226,
    gameDay: 18,
    date: "2019-04-05",
    time: "09:00",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 7,
    awayScore: 4,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4227,
    gameDay: 18,
    date: "2019-04-06",
    time: "03:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 5,
    awayScore: 1,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4228,
    gameDay: 18,
    date: "2019-04-06",
    time: "03:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 3,
    awayScore: 3,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4229,
    gameDay: 19,
    date: "2019-04-12",
    time: "07:00",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 3,
    awayScore: 1,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4230,
    gameDay: 19,
    date: "2019-04-12",
    time: "09:00",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 3,
    awayScore: 2,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4231,
    gameDay: 19,
    date: "2019-04-13",
    time: "02:30",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 3,
    awayScore: 4,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4232,
    gameDay: 19,
    date: "2019-04-13",
    time: "03:00",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 1,
    awayScore: 2,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4233,
    gameDay: 19,
    date: "2019-04-13",
    time: "04:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 4,
    awayScore: 1,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  },
  {
    _id: 4234,
    gameDay: 19,
    date: "2019-04-13",
    time: "05:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 1,
    awayScore: 1,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4235,
    gameDay: 20,
    date: "2019-04-26",
    time: "09:00",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4236,
    gameDay: 20,
    date: "2019-04-26",
    time: "09:00",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4237,
    gameDay: 20,
    date: "2019-04-27",
    time: "02:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4238,
    gameDay: 20,
    date: "2019-04-27",
    time: "03:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4239,
    gameDay: 20,
    date: "2019-04-27",
    time: "04:30",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4240,
    gameDay: 20,
    date: "2019-04-27",
    time: "05:00",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4241,
    gameDay: 21,
    date: "2019-05-03",
    time: "07:00",
    local: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    away: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Pla de Bonaire",
    gameType: "Liga regular"
  },
  {
    _id: 4242,
    gameDay: 21,
    date: "2019-05-04",
    time: "02:30",
    local: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    away: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Club de Campo",
    gameType: "Liga regular"
  },
  {
    _id: 4243,
    gameDay: 21,
    date: "2019-05-04",
    time: "03:00",
    local: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    away: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Mariñamansa",
    gameType: "Liga regular"
  },
  {
    _id: 4244,
    gameDay: 21,
    date: "2019-05-04",
    time: "03:00",
    local: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    away: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "La Estupa",
    gameType: "Liga regular"
  },
  {
    _id: 4245,
    gameDay: 21,
    date: "2019-05-04",
    time: "04:30",
    local: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    away: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Pablo Negre",
    gameType: "Liga regular"
  },
  {
    _id: 4246,
    gameDay: 21,
    date: "2019-05-04",
    time: "05:00",
    local: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    away: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Valle de las Cañas",
    gameType: "Liga regular"
  },
  {
    _id: 4247,
    gameDay: 22,
    date: "2019-05-11",
    time: "04:30",
    local: {
      _id: 1388,
      name: "U.D. Taburiente",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/taburiente.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/taburiente.png"
      }
    },
    away: {
      _id: 1396,
      name: "C.H. Barrocas",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/barrocas.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/barrocas.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Gran Canaria",
    gameType: "Liga regular"
  },
  {
    _id: 4248,
    gameDay: 22,
    date: "2019-05-11",
    time: "04:30",
    local: {
      _id: 1395,
      name: "Atco. S. Sebastián",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticosansebastian.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticosansebastian.png"
      }
    },
    away: {
      _id: 1390,
      name: "CHP Benalmádena",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/benalmadena.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/benalmadena.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Bidebieta-aiete",
    gameType: "Liga regular"
  },
  {
    _id: 4249,
    gameDay: 22,
    date: "2019-05-11",
    time: "04:30",
    local: {
      _id: 1389,
      name: "Pedralbes",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/polo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/polo.png"
      }
    },
    away: {
      _id: 1386,
      name: "Real Sociedad 1927",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/clubdecampo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/clubdecampo.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Eduardo Dualde",
    gameType: "Liga regular"
  },
  {
    _id: 4250,
    gameDay: 22,
    date: "2019-05-11",
    time: "04:30",
    local: {
      _id: 1385,
      name: "SPV Complutense",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/complutense.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/complutense.png"
      }
    },
    away: {
      _id: 1394,
      name: "C.H. San Fernando",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/sanfernando.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/sanfernando.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "SS de los Reyes",
    gameType: "Liga regular"
  },
  {
    _id: 4251,
    gameDay: 22,
    date: "2019-05-11",
    time: "04:30",
    local: {
      _id: 1393,
      name: "Valles Deportivo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/atleticterrassa.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/atleticterrassa.png"
      }
    },
    away: {
      _id: 1392,
      name: "C.H. Pozuelo",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/pozuelo.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/pozuelo.png"
      }
    },
    localScore: 0,
    awayScore: 0,
    group: "",
    facility: "Josep Marques",
    gameType: "Liga regular"
  },
  {
    _id: 4252,
    gameDay: 22,
    date: "2019-05-11",
    time: "08:00",
    local: {
      _id: 1387,
      name: "Giner de los Ríos A",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/giner.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/giner.png"
      }
    },
    away: {
      _id: 1391,
      name: "Egara 1935",
      shield: {
        "20":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/20/egara.png",
        "100":
          "/tuintra-images/images/tui_23_2484f8d7c4be54e4bcb650b53653df04/escudos/100/egara.png"
      }
    },
    localScore: null,
    awayScore: null,
    group: "",
    facility: "Beteró",
    gameType: "Liga regular"
  }
]);
