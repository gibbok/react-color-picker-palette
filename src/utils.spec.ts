import { rgbToHex, componentToHex } from './utils';

describe('utils', () => {
  describe('rgbToHex', () => {
    it('should convert RGB color to HEX', () => {
      expect(rgbToHex([0, 0, 0])).toBe('#000000');
      expect(rgbToHex([255, 255, 255])).toBe('#ffffff');
      expect(rgbToHex([255, 0, 0])).toBe('#ff0000');
      expect(rgbToHex([0, 255, 0])).toBe('#00ff00');
      expect(rgbToHex([0, 0, 255])).toBe('#0000ff');
    });
  });

  describe('componentToHex', () => {
    it('should convert primary color to HEX', () => {
      expect(componentToHex(0)).toBe('00');
      expect(componentToHex(128)).toBe('80');
      expect(componentToHex(255)).toBe('ff');
    });
  });
});
