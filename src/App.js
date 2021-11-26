import { Component } from "react";
import Layout from "./Components/Layout";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Router></Router>
        </Layout>
      </div>
    );
  }
}

export default App;
