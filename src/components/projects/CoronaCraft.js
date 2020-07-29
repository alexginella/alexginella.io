import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";
import "./projectStyles.css"

class CoronaCraft extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h1 className="project-title">
                        Corona-Craft React App
                    </h1>
                </Cell>
                <Cell col={8}>
                    <video className="videoInsert" src={require("../../images/Corona-Craft.mp4")} controls/>
                </Cell>               
                <Cell col={4}>
                    <p className="project-text" style={{fontSize: "20pt"}}>
                        Corona-Craft is a full stack web application designed to allow users to create, browse, upvote
                        and downvote posts. Each post pertains to a DIY crafting project with the goal of spreading
                        accessability and interest in creating your own goods instead of purchasing them from stores.
                        The main mission of Corona-Craft is to help alleviate the supply chain and give people fun + useful
                        crafting projects to work on during quarantine.
                    </p>
                    <p className="project-text" style={{fontSize:"20pt"}}>
                        My role in the project was to design the initial front end (navigation, home page, projects, about, login, signup)
                        and to implement the back-end web scraping functionality which I achieved using the puppeteer JavaScript API.
                    </p>
                </Cell>
                <Cell col={12}>
                    <br/>
                </Cell>            
            </Grid>
        );
    }
}
        


export default CoronaCraft;