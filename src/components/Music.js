import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

class Music extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <img style={{width:"100%"}} src={require("../images/12oclock.jpg")}/>
                </Cell>
                <Cell col={4}>
                    <p className="music-text">
                        We are 12 O'Clock Marty, we dont know what we're doing, but
                        we dont care. We attempted some stuff, feel free to try and listen.
                        Be on the lookout for our Christmas song coming later this summer.
                    </p>
                </Cell>
                <Cell col={8}>
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497766021&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>    
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/497766177&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>          
                </Cell>
            </Grid>
        );
    }
        
}

export default Music;