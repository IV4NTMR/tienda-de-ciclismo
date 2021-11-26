import { Routes, Route } from "react-router-dom";
import Carrito from "./Components/Carrito";
import Productos from "./Components/Productos";

const Router = () => {
  return (
    <Routes>
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/" element={<Productos />}></Route>
    </Routes>
  );
};
export default Router;
