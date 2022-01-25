import { Component } from 'react';

const styles = {
  button: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#000',
    color: '#fff',
    border: '0px',
    borderRadius: '5px',
    padding: '10px 10px',
    cursor: 'pointer'
  }
};

class Button extends Component {
  render() {
    const {icon} = this.props
    return (
      <button {...this.props} style={styles.button}>
        <img
          alt={'icono carrito'}
          src={icon}
          height={this.props.height}
        />
        {this.props.children}
      </button>
    );
  }
}

export default Button;
