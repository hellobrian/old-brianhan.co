import Typography from 'typography'

const baseFontSize = 18

const typography = new Typography({
  baseFontSize: `${baseFontSize}px`,
  baseLineHeight: 1.666,
  headerFontFamily: ['Karla', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
})

export const rem = px => `${px / baseFontSize}rem`

export default typography
