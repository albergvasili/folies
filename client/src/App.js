import Bienvenue from './components/Bienvenue';
import Main from './components/Main';
import Who from './components/Who';
import Escape from './components/Escape';
import Water from './components/Water';
import Tarot from './components/Tarot';

import { useState } from 'react';

function App() {
  const [rendering, setRendering] = useState('main');

  switch (rendering) {
    case 'main':
      return (<Main onClick={ (renderChoice) => setRendering(renderChoice) } />);
    case 'intro':
      return (<Bienvenue onClick={ () => setRendering('who') }/>);
    case 'who':
      return (<Who onClick={ () => console.log('ça marche') }/>);
    case 'escape':
      return (<Escape />);
    case 'water':
      return (<Water />);
    case 'tarot':
      return (<Tarot />);
    default:
  }
};

export default App;
