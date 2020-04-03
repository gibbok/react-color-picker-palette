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

  // describe('saveToClipboard', () => {
  //   // navigator.clipboard = { writeText: jest.fn() };

  //   jest
  //     .spyOn(navigator.clipboard, 'writeText')
  //     .mockImplementationOnce(() => new Promise<void>(x => `${x}-xxx`));

  //   it('should save color to clipboard', () => {
  //     saveToClipboard('#ffffff');
  //     expect(navigator.clipboard.writeText).toBeCalled();
  //   });
  // });
  describe('saveToClipboard', () => {
    beforeAll(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const clipboard = (navigator as any).clipboard;
      if (!(clipboard && clipboard.writeText && clipboard.readText)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (navigator as any).clipboard = {
          writeText: jest.fn(() => Promise.resolve()),
          readText: jest.fn(() => Promise.resolve(JSON.stringify('xx')))
        };
      }
    });

    it('should save color to clipboard', () => {
      saveToClipboard('#ffffff');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((navigator as any).clipboard.writeText).toBeCalledWith('#ffffff');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expect((navigator as any).clipboard.readText).toBeCalledWith('#ffffff');
    });
  });
});
