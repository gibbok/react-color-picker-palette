import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import ColorPickerPalette from './ColorPickerPalette';

storiesOf('ColorPickerPalette', module)
  .add('light', () => <ColorPickerPalette onSelectColor={action('onSelectColor')} />)
  .add('dark', () => <ColorPickerPalette dark onSelectColor={action('onSelectColor')} />);
