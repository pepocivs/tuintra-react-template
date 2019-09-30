export default (data) => {
  const formattedCalendar = {};
  data.map(game => {
    if (!formattedCalendar[game.gameDay]) formattedCalendar[game.gameDay] = [];
    return formattedCalendar[game.gameDay].push(game);
  });
  return formattedCalendar;  
}