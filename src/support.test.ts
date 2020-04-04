export const mockClipboard = (hexColor: string) =>
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: jest.fn(() => Promise.resolve()),
      readText: jest.fn(() => Promise.resolve(hexColor)),
    },
    writable: true,
  });

export const restoreCliboard = (oldClipboard: Clipboard) =>
  Object.defineProperty(navigator, 'clipboard', {
    value: oldClipboard,
  });
