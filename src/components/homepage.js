import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import '../App.css';


class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            autoComplete: ""
        }
    }

    autoComplete(text){
        
        this.setState({
            autoComplete: " " + text
        })
    }

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
                            alex ginella<span style={{opacity:".5"}}>{this.state.autoComplete}</span>
                        </h2>
                        <div className="search-results" onMouseLeave={() => this.setState({autoComplete:""})}>
                            <Link style={{textDecoration:"none"}} to="/Projects/Kontagion"><p className="intro-text" onMouseEnter={() => this.autoComplete("C++")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>C++</strong></p></Link>
                            <Link style={{textDecoration:"none"}} to="/Projects/aMAZEing"><p className="intro-text" onMouseEnter={() => this.autoComplete("Java")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Java</strong></p></Link>
                            <Link style={{textDecoration:"none"}} to="/Projects/POSTagger"><p className="intro-text" onMouseEnter={() => this.autoComplete("Computational Linguistics")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Computational Linguistics</strong></p></Link>                            
                            <Link style={{textDecoration:"none"}} to="/Projects/CoronaCraft"><p className="intro-text" onMouseEnter={() => this.autoComplete("React")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>React</strong></p></Link>                            
                            <Link style={{textDecoration:"none"}} to="/Projects/TwitBot"><p className="intro-text" onMouseEnter={() => this.autoComplete("Python")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Python</strong></p></Link>                            
                            <Link style={{textDecoration:"none"}} to="/Music"><p className="intro-text" onMouseEnter={() => this.autoComplete("Music")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Music</strong></p></Link>                            
                            <Link style={{textDecoration:"none"}} to="/Volleyball"><p style={{borderRadius: "0px 0px 15px 15px"}} className="intro-text" onMouseEnter={() => this.autoComplete("Volleyball")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Volleyball</strong></p></Link>                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;