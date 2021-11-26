import { Component } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Tabs from "./Tabs";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    position: "fixed",
    top: "0",
    width: "100%",

    boxShadow: "0 5px 5px rgb(0,0,0, 0.4)",
    backgroundColor: "black",
    color: "white",

    backgroundColor: "black",
    color: "white"
  }
};

class Navbar extends Component {
  state = {
    tabs: [
      { id: 1, nombre: "Productos" },
      { id: 2, nombre: "Carrito" },
      { id: 3, nombre: "Contacto" }
    ]
  };

  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Tabs selected_tab={this.props.vista} tabs={this.state.tabs} />
        <Button height="40px"></Button>
      </nav>
    );
  }
}

export default Navbar;
