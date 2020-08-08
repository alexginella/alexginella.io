import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

//<FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />

class Volleyball extends Component{
    render(){
        return(
            <Grid className="landing-grid">
                <Cell col={12}>
                    <h2 className="title-text">
                        Volleyball
                    </h2>
                </Cell>
                <Cell col={12}>
                    <p className="project-text">
                        Some open gym funnies (I'm the one in the pants and Gekyume shirt)
                    </p>
                </Cell>
                <Cell col={12}>                   
                    <video className="videoInsert" src={require("../images/OpenGym.MOV")} controls/>
                </Cell>
                <Cell col={12}>
                    <p className="project-text">
                        Cool pic from highschool \(0.0)/
                    </p>
                </Cell>
                <Cell col={12}>                   
                    <img alt="highschool-highlight" src={require("../images/CoolPic.JPG")} controls/>
                </Cell>
            </Grid>
        );
    }
        
}

export default Volleyball;