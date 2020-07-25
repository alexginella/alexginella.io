import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import '../App.css';

class Home extends Component {
    render(){
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require("../images/pfp.jpg")} 
                             alt="my face" 
                             className="pic"/>
                        <h2 className='search-bar'>
                            <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />
                            alex ginella<span style={{opacity:".5"}}> ... computer science</span>
                        </h2>
                    </Cell>
                    <Cell col={12}>
                        <div className="search-results">
                            <Link style={{textDecoration:"none"}} to="/Projects/Kontagion"><p className="intro-text">alex ginella <strong>C++</strong></p></Link>
                            <Link style={{textDecoration:"none"}} to="/Projects/aMAZEing"><p className="intro-text">alex ginella <strong>Java</strong></p></Link>
                            <Link style={{textDecoration:"none"}} to="/Projects/POSTagger"><p className="intro-text">alex ginella <strong>Computational Linguistics</strong></p></Link>                            
                            <Link style={{textDecoration:"none"}} to="/Projects/CoronaCraft"><p className="intro-text">alex ginella <strong>React</strong></p></Link>                            
                            <p className="intro-text">alex ginella <strong>Python</strong></p>
                            <Link style={{textDecoration:"none"}} to="/Music"><p className="intro-text">alex ginella <strong>Music</strong></p></Link>                            
                            <Link style={{textDecoration:"none"}} to="/Volleyball"><p className="intro-text">alex ginella <strong>Volleyball</strong></p></Link>                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;