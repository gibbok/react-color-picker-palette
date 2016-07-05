# ColorPickerPalette
ColorPickerPalette is a React reusable color picker palette written in ES6.

![ColorPickerPalette for React](https://raw.githubusercontent.com/gibbok/react-color-picker-palette/master/examples/colorpicker-react-example.png)

### Features
- Color picking from the palette.
- Selected color in RGB and HEX format.
- Live color preview.
- Remember  last color selected.
- Easy to use and install.

---

### Great! So how do I use it?
- Add this dependecy in your package.json: `"dependencies": { "react-color-picker-palette": "^1.0.7" }`.
- Add a reference to ColorPickerPalette.js in your React application: `import ColorPickerPalette from '.node_modules/react-color-picker-palette/ColorPickerPalette.jsx`.
- Initiate the color picker in your `render()` function: `<ColorPickerPalette id='yourPicker'/>`.

### How do I run the examples?
- First install all dependencies folder using: `npm install`.
- Now runs your local server: `npm start`.
- Run the examples: `gulp examples`.

---

### Customization
You can customize the defaults layout for the entire componenet using CSS.
The default style is visible at [ColorPickerPalette.css](ColorPickerPalette.css)




