import { Component} from 'react'
import Producto from './Producto'


const styles = {
  productos: {
    alignItems: 'center',
    width: '',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    flexWrap: 'wrap'  
  }
}

 class Productos extends Component {
   render() {
    const {productos, agregarAlCarro, eliminarDelCarro} = this.props

     return(
        <div style = {styles.productos}>
          {productos.map(producto =>
             <Producto
              agregarAlCarro={agregarAlCarro}
              eliminarDelCarro ={eliminarDelCarro}
              key={producto.id}
              producto={producto}
             />
             
          )}
        </div>
     )
   }
 }

 export default Productos