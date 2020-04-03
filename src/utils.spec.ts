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
    beforeAll(() => {
      Object.defineProperty(navigator, 'clipboard', {
        value: {
          writeText: jest.fn((_s: string) => Promise.resolve())
        },
        writable: true
      });

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      //@ts-ignore
      // navigator.clipboard = {
      //   writeText: jest.fn(() => Promise.resolve()),
      //   readText: jest.fn(() => Promise.resolve(mockColor))
      // };
    });

    it('should save color to clipboard', async () => {
      saveToClipboard(mockColor);
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockColor);
    });
  });
});
