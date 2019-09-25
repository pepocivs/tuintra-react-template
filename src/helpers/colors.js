import Color from 'color';

export const isDarkColor = color => {
  const myColor = Color(color);
  return myColor.isDark();
};
