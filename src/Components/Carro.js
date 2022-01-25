import { Component } from 'react'
import ElementosCarro from './ElementosCarro'

import BubbleAlert from './BubbleAlert'

const styles = {
  carro: {
    backgroundColor: '#696773 ',
    border: 'none',
    borderRadius: '15px',
    padding: '15px',
    cursor: 'pointer',
    color: '#fff',
    marginRight: '10px',
    fontSize: '15px',
    fontWeight: '600'

  },

  bubble: {
    position: 'relative',
    left: '12px',
    top: '20px',
  }
}

class Carro extends Component {
  render(){

    const {carro, carroVisible, mostrarCarro} = this.props
    const cantidadTotal = carro.reduce ((acc, el) => acc + el.cantidad, 0)
    
    return(
      <div>
        <span style={styles.bubble}>
          {cantidadTotal > 0 ? 
            <BubbleAlert value={cantidadTotal}/>
            : null}      
        </span>
        <button onClick={mostrarCarro} style = {styles.carro}> 
          Carro
        </button>
        {carroVisible ? <ElementosCarro carro={carro}/> :null}       
      </div>
    )
  }
}
 
export default Carro