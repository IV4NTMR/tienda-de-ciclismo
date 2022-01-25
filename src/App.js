import { Component } from "react"
import Layout from './Components/Layout'
import Navbar from './Components/Navbar'

const styles = {
  general: {
    fontFamily: 'Roboto, sans-serif', 
  }
}

class App extends Component {
  state = {
    vista: 1,
    productos: [
      { id: 1, nombre: 'Bicicleta de Monaña gris', marca: 'Patito', precio: 8999.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BM1.webp'},
      { id: 2, nombre: 'Bicicleta de Monaña roja', marca: 'Patito', precio: 6499.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BM2.webp'},
      { id: 3, nombre: 'Bicicleta de Ruta negra', marca: 'Patito', precio: 7799.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BR1.webp'},
      { id: 4, nombre: 'Bicicleta de Ruta amarilla', marca: 'Patito', precio:11999.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BR2.webp'},
      { id: 5, nombre: 'Casco para Ciclismo', marca: 'Patito', precio: 2300.00, caracteristicas: 'Lorem Ipsum', img: '/productos/Casco.webp'},
      { id: 6, nombre: 'Candado de Cable', marca: 'Patito', precio: 800.00, caracteristicas: 'Lorem Ipsum', img: '/productos/Candado.webp'},
    ],

    carro: [],

    carroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state

    if(carro.find(x => x.id === producto.id)){
      const newCarro = carro.map(x => x.id === producto.id
      ?({
        ...x,
        cantidad: x.cantidad+1
      })
      :x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  eliminarDelCarro = (producto) =>{
    const {carro} = this.state

    if(carro.find(x => x.id === producto.id)){
      const newCarro = carro.map(x => (x.id === producto.id && x.cantidad>0)
      ?({
        ...x,
        cantidad: x.cantidad-1
      })
      :x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({carroVisible: !this.state.carroVisible})
  }

  cambiarVista = (nuevaVista) =>{
    
    this.setState({vista: nuevaVista})
    console.log('funciona! vista:', this.state.vista)
  }

  render() {
      
      const {carroVisible} = this.state
      return(
        <div style = {styles.general}>
          <Navbar 
            carroVisible={carroVisible} 
            mostrarCarro ={this.mostrarCarro} 
            carro={this.state.carro}
            cambiarVista = {this.cambiarVista}
          />        
          <Layout //Aquí es donde se muestran las distintas vistas.
            vista = {this.state.vista} 
            productos={this.state.productos}
            agregarAlCarro={this.agregarAlCarro}
            carro={this.state.carro}
            eliminarDelCarro = {this.eliminarDelCarro}
          />
        </div>
      )
  }
}

export default App;
