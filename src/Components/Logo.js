import { Component} from 'react'

const styles = {
  logo: {
    
  },

  logotipo: {
    height: '50px',
    margin: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
  }
}

class Logo extends Component {
  render() {

    return(
      <div style={styles.logo}>
        <img alt = {'Logo'} style= {styles.logotipo}placeholder={'logo'} src={'/productos/logo.png'}/>
      </div>
      
    )
  }
}

export default Logo