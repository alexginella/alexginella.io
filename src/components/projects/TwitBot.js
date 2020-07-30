import React, { Component } from "react"
import { Cell, Grid } from "react-mdl"

class TwitBot extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h1 className="project-title" style={{margin:"auto"}}>TwitBot</h1>
                </Cell>
                <Cell col={12}>
                    <h1 className="project-text">The Idea:</h1>
                    <p className="project-text">
                        Use Python and hopefully some natural language APIs to scrape @realDonaldTrump 
                        tweets, negate them, and post thier negations under a copy cat parody Twitter account.
                        Something like "@NOTrealDonaldTrump"
                    </p>
                </Cell>
            </Grid>
        );
    }
        
}

export default TwitBot;