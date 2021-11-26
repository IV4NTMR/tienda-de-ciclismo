import { Component } from "react";
import Button from "./Button";

const styles = {
  img: {
    width: "250px",
    height: "200px"
  },

  producto: {
    padding: "20px",
    margin: "10px",
    border: "solid 1px #AAA",
    boxShadow: " -5px 5px 5px rgb(0,0,0, 0.4)",
    borderRadius: "5px"
  }
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;

    console.log(this.props);
    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h4>{producto.nombre}</h4>
        <p>Precio: {producto.precio}$</p>
        <Button height="16px" onClick={() => agregarAlCarro(producto)}>
          Añadir al Carro
        </Button>
      </div>
    );
  }
}

export default Producto;
