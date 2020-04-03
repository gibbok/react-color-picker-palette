import * as React from 'react';
import { mount } from 'enzyme';
import ColorPickerPalette from './ColorPickerPalette';

describe('ColorPickerPalette', () => {
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
  it('should render properly', () => {
    const onSelectColorCB = jest.fn(x => x);
    const wrapper = mount(<ColorPickerPalette onSelectColor={onSelectColorCB} />);
    const canvas = wrapper.find('canvas');
    canvas.simulate('click');
    expect(canvas).toHaveLength(1);
    expect(onSelectColorCB).toHaveBeenCalled();
  });
});
