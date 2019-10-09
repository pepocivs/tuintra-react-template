const isSpecialGame = ({local, away}) => {
  return (away.type === 3 || local.type === 3);
}

const groupByDay = (data) => {
  if (Object.keys(data).length === 0) return [];
  const formattedCalendar = {};
  data.map(game => {
    if (isSpecialGame(game)) return null;
    if (!formattedCalendar[game.gameDay]) formattedCalendar[game.gameDay] = [];
    return formattedCalendar[game.gameDay].push(game);
  });
  return formattedCalendar;  
}

export { groupByDay };