import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Pages from './components/Pages'
import {Link} from 'react-router-dom'
import Icons from './components/Icons'
import NavBar from './components/NavBar'
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
import StarfieldAnimation from 'react-starfield-animation'
import Starfield from './components/Starfield';
//<StarfieldAnimation style={{position: 'absolute', width: '100%', height: '100%'}}/>

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
        <Header className="navbar-color" title={<Link to="/" style={{color: "white", textDecoration: "none"}}>alexginella.io</Link>} scroll>
            <Navigation>
                <Icons/>
            </Navigation>
        </Header>
        <Drawer title="alexginella.io">
            <NavBar/>
        </Drawer>
        <Content className="content">\
          <Pages/>
        </Content>
        </Layout>
      </div>
    )
  }
}


export default App;