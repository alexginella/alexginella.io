import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import '../App.css';

/** <Link style={{textDecoration:"none"}} to="/projects/twitbot"><p className="intro-text" onMouseEnter={() => this.autoComplete("Python")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Python</strong></p></Link> */

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
                    <img src={require("../images/bill_gates.jpg")} 
                             alt="my face" 
                             className="pic"/>
                    <h2 className='search-bar'>
                        <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> 
                        alex ginella<span style={{opacity:"0.5"}}>{this.state.autoComplete}</span>
                    </h2>
                    <div className="search-results" onMouseLeave={() => this.setState({autoComplete:""})}>
                        <Link style={{textDecoration:"none"}} to="/projects/kontagion"><p className="intro-text" onMouseEnter={() => this.autoComplete("C++")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>C++</strong></p></Link>
                        <Link style={{textDecoration:"none"}} to="/projects/aMAZEing"><p className="intro-text" onMouseEnter={() => this.autoComplete("Java")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Java</strong></p></Link>
                        <Link style={{textDecoration:"none"}} to="/projects/POSTagger"><p className="intro-text" onMouseEnter={() => this.autoComplete("Computational Linguistics")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Computational Linguistics</strong></p></Link>                            
                        <Link style={{textDecoration:"none"}} to="/projects/coronacraft"><p className="intro-text" onMouseEnter={() => this.autoComplete("JavaScript")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>JavaScript</strong></p></Link>                            
                        <Link style={{textDecoration:"none"}} to="/twitch"><p className="intro-text" onMouseEnter={() => this.autoComplete("Twitch")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Twitch</strong></p></Link>                            
                        <Link style={{textDecoration:"none"}} to="/music"><p style={{borderRadius: "0px 0px 15px 15px"}} className="intro-text" onMouseEnter={() => this.autoComplete("Music")}> <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" /> alex ginella <strong>Music</strong></p></Link>                            
                    </div>
                    </Cell>
                    <Cell col={11}/>
                </Grid>
            </div>
        )
    }
}

export default Home;