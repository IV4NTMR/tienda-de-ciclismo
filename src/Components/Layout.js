import { Component} from 'react'
import Productos from './Productos'
import Title from './Title'
import Contacto from './Contacto'

const styles = {
  layout: {
    backgroundColor: '#fff',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '70px',
  },

  contenedor: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '1100px',
    justifyContent: 'center',
  } 
}

class Layout extends Component {
  render() {

    const {productos, agregarAlCarro, vista, eliminarDelCarro} = this.props
    return(
      <div style={styles.layout}>
        <div style={styles.contenedor}>
          <Title/>
          <div>
            {vista ===1 //Vista de los productos
              ? <Productos
                  agregarAlCarro={agregarAlCarro}
                  productos={productos}
                  eliminarDelCarro ={eliminarDelCarro}
                />
              : null
            }
            {vista ===2 //Vista del contacto
              ? <Contacto/>
              : null
            }

          </div>
        </div>
      </div>
    )
  }
}

export default Layout