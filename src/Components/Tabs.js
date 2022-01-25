import { Component } from 'react';
import Tab from './Tab';

const styles = {
  contenedorTabs: {
    height: '10px',
    display: 'flex',
    width: '500',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

class Tabs extends Component {
  render() {
    const { tabs, cambiarVista } = this.props

    return (
      <div style={styles.contenedorTabs}>
        {tabs.map(tab => (
          <Tab key={tab.idVista} tab={tab} cambiarVista={cambiarVista} />
        ))}
      </div>
    );
  }
}

export default Tabs;
