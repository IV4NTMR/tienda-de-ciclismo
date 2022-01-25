import { Routes, Route } from 'react-router-dom';
import Carrito from './Components/Carrito';
import Productos from './Components/Productos';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Productos />}></Route>
      <Route path='/carrito' element={<Carrito />} /> 
    </Routes>
  );
};
export default Router;
  