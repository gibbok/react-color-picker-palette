/*! ColorPickerPalette | The MIT License (MIT) | Copyright (c) 2020 GibboK */

import * as React from 'react';

const componentToHex = (color: number) => {
  const hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

const ColorPickerPalette = () => {
  const [colorSelected, setColorSelected] = React.useState<string | undefined>();
  const canvasRef = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      console.log('canvas w', canvas.width, canvas.height);
      if (ctx) {
        let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgb(255, 0, 0)');
        gradient.addColorStop(0.15, 'rgb(255, 0, 255)');
        gradient.addColorStop(0.33, 'rgb(0, 0, 255)');
        gradient.addColorStop(0.49, 'rgb(0, 255, 255)');
        gradient.addColorStop(0.67, 'rgb(0, 255, 0)');
        gradient.addColorStop(0.84, 'rgb(255, 255, 0)');
        gradient.addColorStop(1, 'rgb(255, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, canvas.height);
        gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }
    }
  });

  const selectColor = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const canvasRect = canvas.getBoundingClientRect();
        const colorEventX = event.clientX - canvasRect.left;
        const colorEventY = event.clientY - canvasRect.top;
        const imageData = ctx.getImageData(colorEventX, colorEventY, 1, 1);
        const r = imageData.data[0];
        const g = imageData.data[1];
        const b = imageData.data[2];
        const result = rgbToHex(r, g, b);
        setColorSelected(result);
        return result;
      }
    }
    return 'black';
  };

  return (
    <div>
      <canvas
        style={{ margin: 0, padding: 0 }}
        width={400}
        height={400}
        ref={canvasRef}
        onClick={selectColor}
      ></canvas>
      <br />
      Result: {colorSelected}
      <br />
      <div style={{ width: 100, height: 100, backgroundColor: colorSelected }} />
    </div>
  );
};

export default ColorPickerPalette;
