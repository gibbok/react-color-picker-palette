import * as React from 'react';
import { mount } from 'enzyme';
import { ColorPickerPalette } from './ColorPickerPalette';
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

  const onSelectColorCB = jest.fn((x) => x);
  const wrapper = mount(<ColorPickerPalette onSelectColor={onSelectColorCB} />);
  const canvas = wrapper.find('[data-cy="canvas"]');
  const colorDiv = wrapper.find('[data-cy="picked-color"]');
  const prevColorDiv = wrapper.find('[data-cy="picked-prevColor"]');

  describe('should render main components', () => {
    expect(canvas).toHaveLength(1);
    expect(prevColorDiv).toHaveLength(1);
    expect(colorDiv).toHaveLength(1);
  });

  describe('should execute callbacks', () => {
    it('does for canvas', () => {
      canvas.simulate('click');
      expect(onSelectColorCB).toHaveBeenCalled();
    });

    it('does for color', () => {
      colorDiv.simulate('click');
      expect(onSelectColorCB).toHaveBeenCalled();
    });

    it('does for prevColor', () => {
      prevColorDiv.simulate('click');
      expect(onSelectColorCB).toHaveBeenCalled();
    });
  });

  describe('should render initial color for results', () => {
    const initialColor = 'transparent';

    it('renders for color', () => {
      expect(colorDiv.get(0).props.style.backgroundColor).toBe(initialColor);
    });

    it('renders for prevColor', () => {
      expect(prevColorDiv.get(0).props.style.backgroundColor).toBe(initialColor);
    });
  });
});
