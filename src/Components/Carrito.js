import { Component } from 'react';
import { useContext } from 'react';
import { carrito_Reducer, shoppingInitialState } from './CarritoReducer';
import Producto_Carrito from './Producto_Carrito';
import Productos from './Productos';
const styles = {
  imgCarrito: {
    height: '250px',
    margin: '10px',
    backgroundColor: 'white',
    borderRadius: '5px'
  }
};


const clearCart = () => {};

const Carrito = () => {
  return (
    <div className='carritos'>
      <div>
        <img style={styles.imgCarrito} src={'/productos/Candado.webp'} />
      </div>
    </div>
  );
};

export default Carrito