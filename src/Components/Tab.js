import {Component} from 'react'

const  styles = {
  tabContainer: {
    display: 'flex',
    flexDirection: 'column'
  },

  selectedTabDesign: {

    height: '40px',
    width: '150px',

    fontFamily: 'Roboto, sans-serif',
    color: '#fff',
    fontWeight: '900',
    fontSize: '16px',

    backgroundColor: '#009FB7',
    border: '0px',
    padding: '10px 10px',
    cursor: 'pointer',
    margin: '2px'
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

    const tabProps = this.props.tab
    const selected_tab = this.props.selected_tab

      console.log(tabProps)
      console.log('Testeo', this.props, selected_tab)
      return(
        <div style = {styles.tabContainer}>
          
          {tabProps.id === selected_tab ?
            <button 
            style={styles.selectedTabDesign}
            >
            {tabProps.nombre}
            </button>
            :
            <button style={styles.unselcetedTabDesign}>
            {tabProps.nombre}
            </button>      
          }
        </div>
      )
    
  }
}

export default Tab