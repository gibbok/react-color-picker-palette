import { rgbToHex, primaryToHex, saveToClipboard } from './utils';

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

  describe('primaryToHex', () => {
    it('should convert primary color to HEX', () => {
      expect(primaryToHex(0)).toBe('00');
      expect(primaryToHex(128)).toBe('80');
      expect(primaryToHex(255)).toBe('ff');
    });
  });

  describe('saveToClipboard', () => {
    const mockColor = '#ffffff';

    const oldClipboard = navigator.clipboard;

    beforeAll(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: {
          writeText: jest.fn(() => Promise.resolve()),
          readText: jest.fn(() => Promise.resolve(mockColor))
        },
        writable: true
      });
    });

    afterAll(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: oldClipboard
      });
    });

    it('should write color to clipboard', async () => {
      saveToClipboard(mockColor);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockColor);
    });

    it('should read color to clipboard', async () => {
      saveToClipboard(mockColor);
      expect(await navigator.clipboard.readText()).toEqual(mockColor);
    });
  });
});
