import * as React from 'react';
import { mount } from 'enzyme';
import ColorPickerPalette from './ColorPickerPalette';
import { mockClipboard, restoreCliboard } from './support.test';

describe('ColorPickerPalette', () => {
  const mockColor = '#ffffff';
  const oldClipboard = navigator.clipboard;

  beforeAll(() => {
    mockClipboard(mockColor);
  });

  afterAll(() => {
    restoreCliboard(oldClipboard);
  });

  const onSelectColorCB = jest.fn(x => x);
  const wrapper = mount(<ColorPickerPalette onSelectColor={onSelectColorCB} />);

  describe('should execute callbacks', () => {
    const divs = wrapper.find('div > div');

    it('should execute on canvas', () => {
      const canvas = wrapper.find('canvas');
      canvas.simulate('click');
      expect(canvas).toHaveLength(1);
      expect(onSelectColorCB).toHaveBeenCalled();
      expect(onSelectColorCB).toHaveBeenCalledWith({ hex: '#fffdfd', rgb: [255, 253, 253] });
    });

    it('should execute on prevColor', () => {
      const prevColorDiv = divs.at(6);
      prevColorDiv.simulate('click');
      expect(prevColorDiv).toHaveLength(1);
      expect(onSelectColorCB).toHaveBeenCalled();
    });

    it('should execute on color', () => {
      const colorDiv = divs.at(7);
      colorDiv.simulate('click');
      expect(colorDiv).toHaveLength(1);
      expect(onSelectColorCB).toHaveBeenCalled();
    });
  });
});
