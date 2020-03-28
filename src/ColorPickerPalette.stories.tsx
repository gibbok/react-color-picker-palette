import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import ColorPickerPalette from './ColorPickerPalette';

storiesOf('ColorPickerPalette', module).add('Base', () => (
  <ColorPickerPalette onSelectColor={action('onSelectColor')} />
));
