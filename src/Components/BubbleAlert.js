import { Component } from 'react'

const styles = {
  bubbleAlert: {
    backgroundColor: '#ffea00',
    borderRadius: '15px',
    color: '#000',
    padding: '2px 10px',
    fontSize: '0.8rem',
    fontWeight: '900'
  }
}

class BubbleAlert extends Component {
  getNumber(n){
    if (!n){ return ' '}
    return n > 9? '9+' : n
  }

  render(){

    const value = this.props.value
    return(
      <span style = {styles.bubbleAlert}>
        {this.getNumber(value)}
      </span>
    )
  }
}
export default BubbleAlert