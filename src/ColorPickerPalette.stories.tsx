import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { ColorPickerPalette } from './ColorPickerPalette';

const onSelectColor = action('onSelectorColor');

storiesOf('ColorPickerPalette', module)
  .add('light', () => <ColorPickerPalette onSelectColor={onSelectColor} />)
  .add('dark', () => <ColorPickerPalette dark onSelectColor={onSelectColor} />)
  .add('custom', () => (
    <ColorPickerPalette
      styles={{
        colorPicker: {
          fontFamily: 'Arial,Helvetica,sans-serif',
          fontSize: 14,
          color: '#585858',
          width: 400,
          padding: 10,
          border: '1px solid #dddddd',
          backgroundColor: '#f5f5dc',
        },
        canvas: {
          padding: 0,
          width: 400,
          height: 250,
          margin: '0 10px 10px 0',
        },
        marker: {
          position: 'absolute',
          width: 6,
          height: 6,
          border: '1px solid #fff',
          borderRadius: 6,
          boxShadow: '0 0 0 1px rgba(0,0,0,0.75)',
        },
        results: {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        },
        result: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 60,
          border: '1px solid #dddddd',
          marginRight: 10,
        },
        colors: {
          display: 'flex',
          border: '1px solid #dddddd',
        },
        color: {
          width: 60,
          height: 60,
        },
        prevColor: {
          width: 60,
          height: 60,
        },
      }}
      onSelectColor={onSelectColor}
    />
  ));
