import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

class Twitch extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h1 className="title-text">
                        <a style={{color:"white"}} target="blank_" href="https://twitch.tv/churtleneck">Churtleneck</a>
                    </h1>
                </Cell>
                <Cell col={12}>
                    <img style={{margin:"auto"}} alt="my twitch profile at www.twitch.tv/churtleneck" src={require("../images/my-twitch.png")}></img>
                </Cell>
                <Cell col={12}>
                    <h3 className="project-text">Check out my twitch! I jam out and stream flappy bird and other throwback games</h3>
                    <p className="project-text">Here are a couple clips some of my followers made</p>                    
                </Cell>
                <Cell col={6}>
                    <video  className="videoInsert" src={require("../images/flappy-bird-clip1.mp4")} controls/>
                </Cell>
                <Cell col={6}>
                    <video  className="videoInsert" src={require("../images/flappy-bird-clip2.mp4")} controls/>
                </Cell>
            </Grid>
        );
    }
        
}

export default Twitch;