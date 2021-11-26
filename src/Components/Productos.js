import { Component } from "react";
import Producto from "./Producto";

const styles = {
  productos: {
    alignItems: "center",
    width: "",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

class Productos extends Component {
  state = {
    productos: [
      {
        id: 1,
        nombre: "Bicicleta de Monaña 1",
        marca: "Patito",
        precio: 8999.0,
        caracteristicas: "Lorem Ipsum",
        img: "/productos/BM1.webp"
      },
      {
        id: 2,
        nombre: "Bicicleta de Monaña 2",
        marca: "Patito",
        precio: 6499.0,
        caracteristicas: "Lorem Ipsum",
        img: "/productos/BM1.webp"
      },
      {
        id: 3,
        nombre: "Bicicleta de Ruta 1",
        marca: "Patito",
        precio: 7799.0,
        caracteristicas: "Lorem Ipsum",
        img: "/productos/BR1.webp"
      },
      {
        id: 4,
        nombre: "Bicicleta de Ruta 2",
        marca: "Patito",
        precio: 11999.0,
        caracteristicas: "Lorem Ipsum",
        img: "/productos/BR2.webp"
      },
      {
        id: 5,
        nombre: "Casco para Ciclismo de Montaña",
        marca: "Patito",
        precio: 2300.0,
        caracteristicas: "Lorem Ipsum",
        img: "/productos/Casco.webp"
      },
      {
        id: 6,
        nombre: "Candado de Cable",
        marca: "Patito",
        precio: 800.0,
        caracteristicas: "Lorem Ipsum",
        img: "/productos/Candado.webp"
      }
    ]
  };

  agregarAlCarro = producto => {
    console.log("Producto", producto);
  };

  render() {
    return (
      <div style={styles.productos}>
        {this.state.productos.map(producto => (
          <Producto
            agregarAlCarro={this.agregarAlCarro}
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}

export default Productos;
