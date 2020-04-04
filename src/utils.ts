import { RGBColor } from './ColorPickerPalette';

export const primaryToHex = (color: number): string => {
  const hex = color.toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
};

export const rgbToHex = (rgbColor: RGBColor): string =>
  `#${primaryToHex(rgbColor[0])}${primaryToHex(rgbColor[1])}${primaryToHex(rgbColor[2])}`;

export const saveToClipboard = (value: string): Promise<void | {}> =>
  navigator.clipboard.writeText(value).then(
    () => ({}),
    /* istanbul ignore next */
    (e) => console.warn(`Unable to copy: ${e}`)
  );
