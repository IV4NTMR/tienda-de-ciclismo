import { Component } from 'react'


const styles = {
  contenedor:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    border: 'solid 1px #CCC',
    width: '500px',
    padding: '20px',
    justifyText: 'center',
    alignItems: 'center',
  }
}

class Contacto extends Component {
  render(){
    return(
      <div style={styles.contenedor}>
        <div style={styles.texto}>
          <p>Nosotros somos una tienda de productos y servicios de ciclismo profesional que
          cuenta con productos de las mejores marcas internacionales y comprometidos
          con ofrecer productos a precios justos con una garantía de que nuestros productos
          son de alta gama y máxima calidad</p>

          <h2>Contacto</h2>
            <h3>Ubicación</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14931.632923041685!2d-103.37663853022462!3d20.673312199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0d4377c111%3A0xb2db5846c94b205a!2sprofessional%20Bike!5e0!3m2!1ses-419!2smx!4v1638297591869!5m2!1ses-419!2smx" width="480" height="400"></iframe>
            <h3>Teléfono</h3>
              <p>Fijo: 36983456</p>
              <p>Celular: 33-14593845</p>
        </div>
      </div>
      
    )
  }
}

export default Contacto