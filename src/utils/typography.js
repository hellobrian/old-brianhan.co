import Typography from 'typography';

const baseFontSize = 20;

const typography = new Typography({
  baseFontSize: `${baseFontSize}px`,
  baseLineHeight: 1.666,
  headerFontFamily: ['Karla', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  scaleRatio: 2,
});

export const rem = (px) => `${px / baseFontSize}rem`;

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
