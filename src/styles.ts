export type ComponentStructure =
  | 'colorPicker'
  | 'canvas'
  | 'marker'
  | 'results'
  | 'result'
  | 'colors'
  | 'color'
  | 'prevColor';

export type Styles = Record<ComponentStructure, React.CSSProperties>;

export const MARKER_SIZE = 6;
const border = '1px solid #dddddd';

export const defaultStyles: Styles = {
  colorPicker: {
    display: 'flex',
    fontFamily: 'Arial,Helvetica,sans-serif',
    fontSize: 12,
    color: '#585858',
    width: 420,
    padding: 10,
    border,
    boxShadow: 'rgba(0, 0, 0, 0.10) 2px 2px 4px 1px',
    backgroundColor: '#ffffff',
  },
  canvas: {
    margin: '0 10px 0 0',
    padding: 0,
    width: 300,
    height: 150,
    border,
  },
  marker: {
    position: 'absolute',
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    border: '1px solid #fff',
    borderRadius: MARKER_SIZE,
    boxShadow: '0 0 0 1px rgba(0,0,0,0.75)',
  },
  results: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  result: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
    border,
  },
  colors: {
    display: 'flex',
    border,
  },
  color: {
    width: 55,
    height: 55,
  },
  prevColor: {
    width: 55,
    height: 55,
  },
};

export const darkStyles: Styles = {
  colorPicker: {
    display: 'flex',
    fontFamily: 'Arial,Helvetica,sans-serif',
    fontSize: 12,
    color: '#ffffff',
    width: 420,
    padding: 10,
    border,
    boxShadow: 'rgba(0, 0, 0, 0.10) 2px 2px 4px 1px',
    backgroundColor: '#1a1a1a',
  },
  canvas: {
    margin: 0,
    padding: 0,
    width: 300,
    height: 150,
    marginRight: 10,
    border,
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
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  result: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30,
    border,
  },
  colors: {
    display: 'flex',
    border,
  },
  color: {
    width: 55,
    height: 55,
  },
  prevColor: {
    width: 55,
    height: 55,
  },
};
