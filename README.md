# ColorPickerPalette

ColorPickerPalette is a React reusable color picker palette written in TypeScript.

## Key features

- Color picking from the palette
- Live color preview
- Color marker
- Color result in RGB and HEX format
- Remember the last color selected
- Automatically save a color to clipboard
- Easy to use and install
- No external dependencies

---

### Installation

- In your terminal navigate to you `package.json` file and run `npm i react-color-picker-palette`.

### Documentation and examples

Documentation and examples are visible in StoryBook, to run it just execute `npm run storybook`.

### Styles and customization

ColorPickerPalette comes with two elegant light and dark theme, but you can build your theme for the entire component using CSS.
The default themes and examples of customization are visible in StoryBook.

### Developement

Script descriptions:

`npm i` install all dependencies for the project

`npm run tsc` perform a TypeScript validation

`npm run tsc:watch` watch files and continuously perform TypeScript validation

`npm run build` build project

`npm run build` watch files and continuously build

`npm run build:prod` make build for production including all validations

`npm run lint` perform lint validation

`npm run lint:fix` perform lint validation and automatically fix issues

`npm run storybook` run and open StoryBook at <http://localhost:6006/>

`storybook:build` make build for StoryBook

`npm test` execute tests

`npm test:no-coverage` execute tests but do not create a coverage report

`npm test:watch` watch files and continuously test

`npm run loki` execute visual regression testing

`npm run loki:approve` approve difference found during visual regression

`npm run cypress` execute end to end testing
