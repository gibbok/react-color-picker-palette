import { RGBColor } from './ColorPickerPalette';

export const saveToClipboard = (value: string): Promise<void | {}> =>
  navigator.clipboard.writeText(value).then(
    () => ({}),
    e => console.warn(`Unable to copy: ${e}`)
  );

export const componentToHex = (color: number) => {
  const hex = color.toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
};

export const rgbToHex = (rgbColor: RGBColor) =>
  `#${componentToHex(rgbColor[0])}${componentToHex(rgbColor[1])}${componentToHex(rgbColor[2])}`;
