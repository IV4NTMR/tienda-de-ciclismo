import {Component} from 'react';

const styles = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    position: 'fixed',
    top: '0',
    width: '100%',

    backgroundColor: 'black',
    color: 'white',

  }
}

class Navbar extends Component {
  render(){
    return(
      <nav style= {styles.navbar} >
        <p>LOGO</p>
        <p>CARRO</p>
      </nav>
    )
  }
}

export default Navbar