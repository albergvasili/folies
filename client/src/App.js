import Bienvenue from './components/Bienvenue';
import Main from './components/Main';
import {useState} from 'react';

function App() {
  const [rendering, setRendering] = useState("main");

  const enter = () => {
    setRendering("intro");
  };

  switch (rendering) {
    case 'main':
      return (<Main onClick={enter} />);
    case 'intro':
      return (<Bienvenue />);
    default:
  }
};

export default App;
