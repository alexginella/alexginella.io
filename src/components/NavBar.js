import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Navigation} from 'react-mdl';

// onClick={() => this.hideToggle()}

class NavBar extends Component{
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    
    render() {
        return (
            <Navigation>
                <Link to="/">Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
                <Link to="/resume" >Resume</Link>
                <Link to="/music">Music</Link>
                <Link to="/volleyball" >Volleyball</Link>
                <Link to="/aboutme">About Me</Link>

            </Navigation>
        );
    }
}

export default NavBar;