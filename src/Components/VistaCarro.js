import { Component } from 'react'
import CarroLista from './CarroLista'

class VistaCarro extends Component {

  render(){
    const {carro} = this.props
    return(
      <p>carrito</p>
      <CarroLista/>
    )
  }
}

export default VistaCarro