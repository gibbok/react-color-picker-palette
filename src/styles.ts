type ComponentStructure =
  | 'colorPicker'
  | 'canvas'
  | 'marker'
  | 'results'
  | 'colors'
  | 'color'
  | 'prevColor';

type Styles = Record<ComponentStructure, React.CSSProperties>;

export const defaultStyles: Styles = {
  colorPicker: {
    display: 'flex',
    width: 410,
    padding: 10,
    border: '1px solid #dddddd'
  },
  canvas: {
    margin: 0,
    padding: 0,
    width: 300,
    height: 150,
    marginRight: 10
  },
  marker: {
    position: 'absolute',
    width: 6,
    height: 6,
    border: '1px solid #fff',
    borderRadius: 6,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.75)'
  },
  results: {},
  colors: {
    display: 'flex'
  },
  color: {
    width: 50,
    height: 50
  },
  prevColor: {
    width: 50,
    height: 50
  }
};
