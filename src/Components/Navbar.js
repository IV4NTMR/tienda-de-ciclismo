import { Component } from 'react';
import Logo from './Logo';
import Button from './Button';
import Carro from './Carro';
import Tabs from './Tabs';
import { useNavigate } from 'react-router-dom';

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    position: 'fixed',
    top: '0',
    width: '100%',

    boxShadow: '0 5px 5px rgb(0,0,0, 0.4)',
    backgroundColor: 'black',
    color: 'white',

    backgroundColor: 'black',
    color: 'white' 
  }
};

class Navbar extends Component{
  state = {
    tabs:[
      {idVista: 1, nombre:'Productos'},
      {idVista: 2, nombre:'Nosotros'},
    ] 
  }
  render(){
    const {carro, carroVisible, mostrarCarro, cambiarVista} = this.props
  
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Tabs 
          tabs={this.state.tabs}  
          cambiarVista = {cambiarVista} 
        />
        <Carro 
          carro={carro}
          carroVisible = {carroVisible}
          mostrarCarro = {mostrarCarro}
        />
      </nav>
    );
  }

};

export default Navbar;
