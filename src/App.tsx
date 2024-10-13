import { useState } from 'react';
import Navigate from './routes/Navigate';
import Prueba from './prueba';

function App() {
  const [mostrar, setMostrar] = useState(false)
  return (
      <Navigate />
  );
}

export default App;
