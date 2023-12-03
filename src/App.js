import Body from './componentes/body/body'
import Login from './componentes/body/login';

import { Routes, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Body></Body>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </>
  );
}

export default App;
