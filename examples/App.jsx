import React from 'react';
import ColorPickerPalette from '../ColorPickerPalette.jsx'

class App extends React.Component {
    render() {
        return (
            <div>
                <ColorPickerPalette id='colorPicker1'/>
            </div>
        );
    }
}

export default App;