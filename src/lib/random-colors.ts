export const getRandomLightColor = (): string => {
  const letters = '89ABCDEF'; // Using higher range values to ensure lighter colors
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};