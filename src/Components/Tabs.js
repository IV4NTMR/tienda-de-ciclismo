import {Component} from 'react'
import Tab from './Tab'

const styles = {
  contenedorTabs: {
    height: '70px',
    display: 'flex',
    width: '500',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}

class Tabs extends Component {

 

  render() {

    const {tabs} = this.props

    return(
      <div style = {styles.contenedorTabs}>
        {tabs.map(tab =>
          <Tab
            key={tab.id}
            tab = {tab}
            selected_tab = {this.props.selected_tab}
          />
        )}
      </div>
    )
  }
}

export default Tabs