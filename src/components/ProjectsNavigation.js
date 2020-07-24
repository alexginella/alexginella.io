import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Grid, Cell } from 'react-mdl';

class ProjectsNavigation extends Component{

    render(){
        return(
            <Grid className="projects-navBar">
                <Cell>
                    <Link to="/Projects/C++" style={{color: "white", textDecoration: "none"}}>C++</Link>
                </Cell>
                <Cell>
                    <Link to="/Projects/Java" style={{color: "white", textDecoration: "none"}}>Java</Link>
                </Cell>
                <Cell>
                    <Link to="/Projects/Python" style={{color: "white", textDecoration: "none"}}>Python</Link>
                </Cell>
            </Grid>
        )
    }
}

export default ProjectsNavigation;