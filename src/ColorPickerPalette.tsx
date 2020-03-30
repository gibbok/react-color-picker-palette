/*! ColorPickerPalette | The MIT License (MIT) | Copyright (c) 2020 GibboK */

import * as React from 'react';
import { defaultStyles, Styles } from './styles';

type RGBColor = readonly [number, number, number];

type ColorPicked = Readonly<{ rgb: RGBColor; hex: string }>;

type MouseEventCanvas = React.MouseEvent<HTMLCanvasElement>;

type ColorPickerPaletteProps = Readonly<{
  styles?: Styles;
  dark?: boolean;
  onSelectColor: (x: ColorPicked) => void;
}>;

const NO_COLOR = 'transparent';

const saveToClipboard = (value: string): Promise<void | {}> =>
  navigator.clipboard.writeText(value).then(
    () => ({}),
    e => console.warn(`Unable to copy: ${e}`)
  );

const componentToHex = (color: number) => {
  const hex = color.toString(16);
  return hex.length == 1 ? `0${hex}` : hex;
};

const rgbToHex = (rgbColor: RGBColor) =>
  `#${componentToHex(rgbColor[0])}${componentToHex(rgbColor[1])}${componentToHex(rgbColor[2])}`;

const ColorPickerPalette = ({ styles = defaultStyles, onSelectColor }: ColorPickerPaletteProps) => {
  const [color, setColor] = React.useState<string>(NO_COLOR);
  const [colorRGB, setColorRGB] = React.useState<RGBColor | null>();
  const [prevColor, setPrevColor] = React.useState<string>(NO_COLOR);

  const [markerX, setMarkerX] = React.useState<number | null>(null);
  const [markerY, setMarkerY] = React.useState<number | null>(null);

  const canvasRef = React.createRef<HTMLCanvasElement>();
  let canvas: HTMLCanvasElement | null = null;
  let ctx: CanvasRenderingContext2D | null = null;
  let canvasRect: DOMRect | null = null;

  React.useEffect(() => {
    canvas = canvasRef.current;
    if (canvas) {
      ctx = canvas.getContext('2d');
      canvasRect = canvas.getBoundingClientRect();
      if (ctx && canvasRect) {
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

  const selectColor = (event: MouseEventCanvas): void => {
    if (canvas && ctx && canvasRect) {
      const colorX = event.clientX - canvasRect.left;
      const colorY = event.clientY - canvasRect.top;
      const imageData = ctx.getImageData(colorX, colorY, 1, 1);
      const r = imageData.data[0];
      const g = imageData.data[1];
      const b = imageData.data[2];
      const newRGB: RGBColor = [r, g, b];
      const newHex = rgbToHex(newRGB);
      setColorRGB(newRGB);
      setPrevColor(color);
      setColor(newHex);
      saveToClipboard(newHex);
      onSelectColor({ rgb: newRGB, hex: newHex });
    }
  };

  const setMarkerPos = (e: MouseEventCanvas) => {
    if (canvas && ctx && canvasRect) {
      setMarkerX(e.pageX - canvasRect.left / 2);
      setMarkerY(e.pageY - canvasRect.top / 2);
    }
  };

  return (
    <div style={{ ...styles.colorPicker }}>
      <canvas
        style={{ ...styles.canvas }}
        ref={canvasRef}
        onClick={e => {
          selectColor(e);
          setMarkerPos(e);
        }}
      ></canvas>
      {markerX && markerY && (
        <div
          style={{
            ...styles.marker,
            top: markerY,
            left: markerX
          }}
        />
      )}
      <div style={{ ...styles.results }}>
        <div style={{ ...styles.result }}>
          <div>{color}</div>
        </div>
        <div style={{ ...styles.result }}>
          <div>{colorRGB && `rgb(${colorRGB[0]}, ${colorRGB[1]}, ${colorRGB[2]})`}</div>
        </div>
        <div style={{ ...styles.colors }}>
          <div
            onClick={() => saveToClipboard(color)}
            style={{ ...styles.color, backgroundColor: color }}
          />
          <div
            onClick={() => saveToClipboard(prevColor)}
            style={{ ...styles.prevColor, backgroundColor: prevColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPickerPalette;
