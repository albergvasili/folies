import Bienvenue from './components/Bienvenue';
import Main from './components/Main';
import Who from './components/Who';

import { useState } from 'react';

function App() {
  const [rendering, setRendering] = useState('main');

  switch (rendering) {
    case 'main':
      return (<Main onClick={ () => setRendering('intro') } />);
    case 'intro':
      return (<Bienvenue onClick={ () => setRendering('who') }/>);
    case 'who':
      return (<Who onClick={ () => console.log('ça marche') }/>);

    default:
  }
};

export default App;
