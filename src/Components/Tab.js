import {Component} from 'react'

const  styles = {
  tabContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  unselcetedTabDesign:{
    height: '40px',
    width: '150px',

    fontFamily: 'Roboto, sans-serif',
    color: '#',
    fontWeight: '900',
    fontSize: '16px',

    backgroundColor: 'rgba(255,255,255)',
    border: '0px',
    padding: '10px 10px',
    cursor: 'pointer',
    margin: '2px'
  }
}



class Tab extends Component {
  render () {

    const {tab, cambiarVista } = this.props
   

      return(
        <div style = {styles.tabContainer}>
            <button onClick = {(e) => cambiarVista(tab.idVista)} style={styles.unselcetedTabDesign}>
              {tab.nombre}
            </button>      
        </div>
      )
    
  }
}

export default Tab