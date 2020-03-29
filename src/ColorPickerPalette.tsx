/*! ColorPickerPalette | The MIT License (MIT) | Copyright (c) 2020 GibboK */

import * as React from 'react';

const NO_COLOR = 'transparent';

const saveToClipboard = (value: string): void => {
  navigator.clipboard.writeText(value).then(
    () => ({}),
    () => console.warn('Unable to copy.')
  );
};

const componentToHex = (color: number) => {
  const hex = color.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

const rgbToHex = (r: number, g: number, b: number) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

type RGBColor = readonly [number, number, number];

type Colors = Readonly<{ rgb: RGBColor; hex: string }>;

type MouseEventCanvas = React.MouseEvent<HTMLCanvasElement>;

type ColorPickerPaletteProps = Readonly<{
  onSelectColor: (x: Colors) => void;
}>;

const ColorPickerPalette = ({ onSelectColor }: ColorPickerPaletteProps) => {
  const [color, setColor] = React.useState<string>(NO_COLOR);
  const [prevColor, setPrevColor] = React.useState<string>(NO_COLOR);
  const [markerX, setMarkerX] = React.useState<number>(-3);
  const [markerY, setMarkerY] = React.useState<number>(-3);

  const canvasRef = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
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

  const selectColor = (event: MouseEventCanvas) => {
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
        const newColor = rgbToHex(r, g, b);
        setPrevColor(color);
        setColor(newColor);
        saveToClipboard(newColor);
        onSelectColor({ rgb: [r, g, b], hex: newColor });
        return newColor;
      }
    }
    return NO_COLOR;
  };

  const setMarkerPos = (e: MouseEventCanvas) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const canvasRect = canvas.getBoundingClientRect();
        setMarkerX(e.pageX - canvasRect.left / 2);
        setMarkerY(e.pageY - canvasRect.top / 2);
        // this.refs.previewColorMarker.style.left =
        //   event.pageX - rect.left - this.styles.marker.width / 2 + 'px';
        // this.refs.previewColorMarker.style.top =
        //   event.pageY - rect.top - this.styles.marker.height / 2 + 'px';
      }
    }
  };

  return (
    <div>
      <canvas
        style={{ margin: 0, padding: 0 }}
        width={400}
        height={400}
        ref={canvasRef}
        onClick={e => {
          selectColor(e);
          setMarkerPos(e);
        }}
      ></canvas>
      <div
        style={{
          position: 'absolute',
          top: markerY,
          left: markerX,
          width: 6,
          height: 6,
          border: '1px solid #fff',
          borderRadius: 6,
          boxShadow: '0 0 0 1px rgba(0,0,0,0.75)'
        }}
      />
      <br />
      Result: {color}
      <br />
      <div
        onClick={() => saveToClipboard(color)}
        style={{ width: 100, height: 100, backgroundColor: color }}
      />
      <div
        onClick={() => saveToClipboard(prevColor)}
        style={{ width: 100, height: 100, backgroundColor: prevColor }}
      />
    </div>
  );
};

export default ColorPickerPalette;
