type ComponentStructure = 'colorPicker' | 'canvas' | 'results' | 'colors' | 'color' | 'prevColor';

type Styles = Record<ComponentStructure, React.CSSProperties>;

export const styles: Styles = {
  colorPicker: {},
  canvas: {},
  results: {},
  colors: {},
  color: {},
  prevColor: {}
};
