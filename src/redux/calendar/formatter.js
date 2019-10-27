import { mapValues, groupBy, omit } from "lodash";

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

const getGroups = (data) => {
  if (Object.keys(data).length === 0) return [];
  const grouped = mapValues(groupBy(data, 'group'),
    clist => clist.map(game => omit(game, 'group')));
  
  const sortedCalendar = {};
  Object.keys(grouped).map(group => {
    const groupName = (group === 'null') ? 'unique': group;
    return sortedCalendar[groupName] = groupByDay(grouped[group]);
  })
  return sortedCalendar;
}

export { groupByDay, getGroups };