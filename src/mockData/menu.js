export default [
  {
    _id: "1",
    father: "0",
    visible: true,
    title: "Inicio",
    link: "home",
    file: "inicio",
    module: { _id: "", name: "", icon: "" },
    position: "1",
    children: []
  },
  {
    _id: "12",
    father: "0",
    visible: true,
    title: "Competiciones",
    link: "competitions",
    file: "competiciones",
    module: {
      _id: "8",
      name: "modules.competitions_-_games",
      icon: "calendar"
    },
    position: "12",
    children: []
  },
  {
    _id: "2",
    father: "0",
    visible: true,
    title: "Notícias",
    link: "news",
    file: "noticias",
    module: {
      _id: "10",
      name: "Publicación de Notícias",
      icon: "bullhorn"
    },
    position: "2",
    children: []
  },
  {
    _id: "3",
    father: "0",
    visible: true,
    title: "Equipos",
    link: "teams",
    file: "equipos",
    module: { _id: "7", name: "Mis equipos", icon: "group" },
    position: "10",
    children: [{
      _id: "10",
      father: "4",
      visible: true,
      title: "Palmarés",
      link: "our_cups",
      file: "palmares",
      module: { _id: "5", name: "Palmarés e Historia", icon: "cup" },
      position: "7",
      children: []
    },
    {
      _id: "11",
      father: "4",
      visible: true,
      title: "Intranet",
      link: "intranet",
      file: "intranet",
      module: { _id: "", name: "", icon: "" },
      position: "8",
      children: []
    }]
  },
  {
    _id: "4",
    father: "0",
    visible: true,
    title: "El Club",
    link: "club",
    file: "club",
    module: { _id: "", name: "", icon: "" },
    position: "3",
    children: [
      {
        _id: "10",
        father: "4",
        visible: true,
        title: "Palmarés",
        link: "our_cups",
        file: "palmares",
        module: { _id: "5", name: "Palmarés e Historia", icon: "cup" },
        position: "7",
        children: []
      },
      {
        _id: "11",
        father: "4",
        visible: true,
        title: "Intranet",
        link: "intranet",
        file: "intranet",
        module: { _id: "", name: "", icon: "" },
        position: "8",
        children: []
      },
      {
        _id: "7",
        father: "4",
        visible: true,
        title: "Documentación",
        link: "documentation",
        file: "documentos",
        module: {
          _id: "9",
          name: "Zona Pública de archivos",
          icon: "sort"
        },
        position: "4",
        children: []
      },
      {
        _id: "8",
        father: "4",
        visible: true,
        title: "Directiva",
        link: "directors",
        file: "directiva",
        module: { _id: "", name: "", icon: "" },
        position: "5",
        children: []
      },
      {
        _id: "9",
        father: "4",
        visible: true,
        title: "Historia",
        link: "history",
        file: "historia",
        module: { _id: "5", name: "Palmarés e Historia", icon: "cup" },
        position: "6",
        children: []
      },
      {
        _id: "5",
        father: "4",
        visible: true,
        title: "Enlaces",
        link: "links",
        file: "links",
        module: { _id: "16", name: "Enlaces web", icon: "link" },
        position: "11",
        children: []
      }
    ]
  },
  {
    _id: "6",
    father: "0",
    visible: true,
    title: "Contacto",
    link: "contact",
    file: "contacto",
    module: { _id: "", name: "", icon: "" },
    position: "9",
    children: []
  },
];
