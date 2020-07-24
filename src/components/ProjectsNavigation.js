import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Grid, Cell } from 'react-mdl';

class ProjectsNavigation extends Component{

    render(){
        return(
            <Grid className="projects-navBar">
                <Cell>
                    <Link to="/Projects/Kontageon" style={{color: "white", textDecoration: "none"}}>Kontageon</Link>
                </Cell>
                <Cell>
                    <Link to="/Projects/aMAZEing" style={{color: "white", textDecoration: "none"}}>aMAZEing</Link>
                </Cell>
                <Cell>
                    <Link to="/Projects/POSTagger" style={{color: "white", textDecoration: "none"}}>Part Of Speech Tagger</Link>
                </Cell>
            </Grid>
        )
    }
}

export default ProjectsNavigation;