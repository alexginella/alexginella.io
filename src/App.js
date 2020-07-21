import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Pages from './components/Pages'
import {Link} from 'react-router-dom'
import Icons from './components/Icons'
import NavBar from './components/NavBar'

function hideToggle() {
  var selectorId = document.querySelector('.mdl-layout');
  selectorId.MaterialLayout.toggleDrawer();
}

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
        <Header className="navbar-color" title="alexginella.io" scroll>
            <Navigation>
                <Icons/>
            </Navigation>
        </Header>
        <Drawer title="alexginella.io">
            <NavBar/>
        </Drawer>
        <Content className="content">
            <div className="page-content" />
            <Pages/>
        </Content>
        </Layout>
      </div>
    )
  }
}


export default App;