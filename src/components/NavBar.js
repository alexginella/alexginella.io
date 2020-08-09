import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navigation} from 'react-mdl';

class NavBar extends Component{
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    
    render() {
        return (
            <Navigation>
                <Link to="/" onClick={() => this.hideToggle()}>Home</Link>
                <Link to='/projects' onClick={() => this.hideToggle()}>Projects</Link>
                <Link to='/experience' onClick={() => this.hideToggle()}>Experience</Link>
                <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
                <Link to="/music" onClick={() => this.hideToggle()}>Music</Link>
                <Link to="/volleyball" onClick={() => this.hideToggle()}>Volleyball</Link>
                <Link to="/aboutme" onClick={() => this.hideToggle()}>About Me</Link>

            </Navigation>
        );
    }
}

export default NavBar;