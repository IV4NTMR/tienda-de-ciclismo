import {Component} from 'react'

const styles = {
  button: {
    backgroundColor: '#000',
    color: '#fff',
    border: '0px',
    borderRadius: '5px',
    padding: '10px 10px',
    cursor: 'pointer'
  }
}

class Button extends Component {
  render(){
    return(

      <button {...this.props} style={styles.button}>
        <img src="./productos/agregar-carrito.png" width="16px" height="16px"/> Añadir al Carrito
      </button>
    )
  }
}

export default Button

