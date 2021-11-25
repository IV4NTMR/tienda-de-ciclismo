import { Component } from "react"
import Productos from './Components/Productos'
import Layout from './Components/Layout'
import Title from './Components/Title'
import Navbar from './Components/Navbar'

const styles = {
  general: {
    fontFamily: 'Roboto, sans-serif'
  }
}

class App extends Component {
  state = {
    productos: [
      { id: 1, nombre: 'Bicicleta de Monaña 1', marca: 'Patito', precio: 8999.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BM1.webp'},
      { id: 2, nombre: 'Bicicleta de Monaña 2', marca: 'Patito', precio: 6499.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BM2.webp'},
      { id: 3, nombre: 'Bicicleta de Ruta 1', marca: 'Patito', precio: 7799.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BR1.webp'},
      { id: 4, nombre: 'Bicicleta de Ruta 2', marca: 'Patito', precio:11999.00, caracteristicas: 'Lorem Ipsum', img: '/productos/BR2.webp'},
      { id: 5, nombre: 'Casco para Ciclismo de Montaña', marca: 'Patito', precio: 2300.00, caracteristicas: 'Lorem Ipsum', img: '/productos/Casco.webp'},
      { id: 6, nombre: 'Candado de Cable', marca: 'Patito', precio: 800.00, caracteristicas: 'Lorem Ipsum', img: '/productos/Candado.webp'},
    ],

    vista:1
  }

  render() {
      return(
        <div style = {styles.general}>
          <Navbar vista={this.state.vista}/>        
          <Layout>
            <Title/>
            <Productos
              agregarAlCarro={() => console.log('Producto Seleccionado')}
              productos={this.state.productos}
            />
          </Layout>
        </div>
      )
  }
}

export default App;
