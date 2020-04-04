import { rgbToHex, primaryToHex, saveToClipboard } from './utils';
import { mockClipboard, restoreCliboard } from './support.test';

describe('utils', () => {
  describe('primaryToHex', () => {
    it('should convert primary color to HEX', () => {
      expect(primaryToHex(0)).toBe('00');
      expect(primaryToHex(128)).toBe('80');
      expect(primaryToHex(255)).toBe('ff');
    });
  });

  describe('rgbToHex', () => {
    it('should convert RGB color to HEX', () => {
      expect(rgbToHex([0, 0, 0])).toBe('#000000');
      expect(rgbToHex([255, 255, 255])).toBe('#ffffff');
      expect(rgbToHex([255, 0, 0])).toBe('#ff0000');
      expect(rgbToHex([0, 255, 0])).toBe('#00ff00');
      expect(rgbToHex([0, 0, 255])).toBe('#0000ff');
    });
  });

  describe('saveToClipboard', () => {
    const mockColor = '#ffffff';
    const oldClipboard = navigator.clipboard;

    beforeAll(() => {
      mockClipboard(mockColor);
    });

    afterAll(() => {
      restoreCliboard(oldClipboard);
    });

    it('should write color to clipboard', async () => {
      saveToClipboard(mockColor);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockColor);
    });

    it('should read color from clipboard', async () => {
      saveToClipboard(mockColor);
      expect(await navigator.clipboard.readText()).toEqual(mockColor);
    });
  });
});
