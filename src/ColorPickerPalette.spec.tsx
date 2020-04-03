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

  it('should execute onSelectColor callback on canvas after click', () => {
    const onSelectColorCB = jest.fn(x => x);
    const wrapper = mount(<ColorPickerPalette onSelectColor={onSelectColorCB} />);
    const canvas = wrapper.find('canvas');
    canvas.simulate('click');
    expect(canvas).toHaveLength(1);
    expect(onSelectColorCB).toHaveBeenCalled();
    expect(onSelectColorCB).toHaveBeenCalledWith({ hex: '#fffdfd', rgb: [255, 253, 253] });
  });
});
