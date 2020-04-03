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
  const canvas = wrapper.find('canvas');
  const divs = wrapper.find('div > div');
  const colorDiv = divs.at(7);
  const prevColorDiv = divs.at(6);

  describe('should render main components', () => {
    expect(canvas).toHaveLength(1);
    expect(prevColorDiv).toHaveLength(1);
    expect(colorDiv).toHaveLength(1);
  });

  describe('should execute callbacks', () => {
    it('should execute on canvas', () => {
      canvas.simulate('click');
      expect(onSelectColorCB).toHaveBeenCalledWith({ hex: '#fffdfd', rgb: [255, 253, 253] });
    });

    it('should execute on prevColor', () => {
      prevColorDiv.simulate('click');
      expect(onSelectColorCB).toHaveBeenCalled();
    });

    it('should execute on color', () => {
      colorDiv.simulate('click');
      expect(onSelectColorCB).toHaveBeenCalled();
    });
  });

  describe('should render color in results', () => {
    it('should have transparent for result color', () => {
      expect(colorDiv.get(0).props.style.backgroundColor).toBe('transparent');
    });

    it('should have transparent for result prevColor', () => {
      expect(prevColorDiv.get(0).props.style.backgroundColor).toBe('transparent');
    });
  });
});
