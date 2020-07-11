import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Pages from './components/Pages'
import {Link} from 'react-router-dom'
import Icons from './components/Icons'

class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
        <Layout>
        <Header className="navbar-color" title="Alex Ginella" scroll>
            <Navigation>
                <Icons/>
                {/*
                <Link to="/">Home</Link>
                <Link to="resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
              */}
            </Navigation>
        </Header>
        <Drawer title="Alex Ginella">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
            </Navigation>
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


/*
class App extends Component {
  render(){
    return (
      <div className="container">
        <h1 style={{color: 'white'}}>Alex Ginella</h1>
        <Navbar/>
    </div>
    );
  }
}
*/

export default App;