import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class NavBar extends Component{
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    
    render() {
        return (
            <Navigation>
                <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
                <Link to='/Projects' onClick={() => this.hideToggle()}>Projects</Link>
                <Link to="/Resume" onClick={() => this.hideToggle()}>Resume</Link>
                <Link to="/Aboutme" onClick={() => this.hideToggle()}>About Me</Link>
            </Navigation>
        );
    }
}

export default NavBar;