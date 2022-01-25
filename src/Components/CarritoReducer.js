import { Component } from 'react';
import { TYPES } from './CarritoAcciones';

//Archivo inutilizable

export const shoppingInitialState = {
  productos: [
    {
      id: 1,
      nombre: 'Bicicleta de Monaña 1',
      marca: 'Patito',
      precio: 8999.0,
      caracteristicas: 'Lorem Ipsum',
      img: '/productos/BM1.webp'
    },
    {
      id: 2,
      nombre: 'Bicicleta de Monaña 2',
      marca: 'Patito',
      precio: 6499.0,
      caracteristicas: 'Lorem Ipsum',
      img: '/productos/BM1.webp'
    },
    {
      id: 3,
      nombre: 'Bicicleta de Ruta 1',
      marca: 'Patito',
      precio: 7799.0,
      caracteristicas: 'Lorem Ipsum',
      img: '/productos/BR1.webp'
    },
    {
      id: 4,
      nombre: 'Bicicleta de Ruta 2',
      marca: 'Patito',
      precio: 11999.0,
      caracteristicas: 'Lorem Ipsum',
      img: '/productos/BR2.webp'
    },
    {
      id: 5,
      nombre: 'Casco para Ciclismo de Montaña',
      marca: 'Patito',
      precio: 2300.0,
      caracteristicas: 'Lorem Ipsum',
      img: '/productos/Casco.webp'
    },
    {
      id: 6,
      nombre: 'Candado de Cable',
      marca: 'Patito',
      precio: 800.0,
      caracteristicas: 'Lorem Ipsum',
      img: '/productos/Candado.webp'
    }
  ],

  Cart: []
};

export function carrito_Reducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}
