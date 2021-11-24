import { Component} from 'react';

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
    return(
      <div style={styles.layout}>
        <div style={styles.contenedor}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout