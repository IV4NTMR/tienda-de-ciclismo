import {Component} from 'react'

const styles = {
  ventanaCarro: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: '14px',
    fontWeight: '900',
    position: 'absolute',
    marginTop: '10px',
    boxShadow: '1px 5px 5px rgb(0,0,0, 0.4)',
    borderRadius: '5px',
    width: '400px',
    padding: '10px',
    right: '10px',
  },
  lista:{
    margin: '0px',
    padding: '0px',
  },
  producto:{
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 20px',
    border: 'solid 1px #CCC',
    borderRadius: '5px'
  },
  btnComprar: {
    backgroundColor: '#ffea00',
    borderRadius: '15px',
    color: '#000',
    padding: '2px 10px',
    fontSize: '0.8rem',
    fontWeight: '600',
    marginTop: '10px',
    cursor: 'pointer',
    border: 'none',
  },


}

  


class ElementosCarro extends Component {

  render(){
    const {carro} = this.props
    return(
      <div style={styles.ventanaCarro}>
        <ul style={styles.lista}>
          {carro.map(x => 
          <li key={x.id} style={styles.producto}>
            <img alt = {x.nombre} src = {x.img} height={'30px'} width={'40px'} />
            <span>{x.nombre}</span> 
            <span>{x.cantidad}</span>
          </li>)}
        </ul>
        <button style={styles.btnComprar}>Comprar</button>
      </div>
    )
  }
}

export default ElementosCarro