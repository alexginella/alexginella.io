import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

class Kontagion extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h1 className="project-title" style={{margin:"auto"}}>Kontagion</h1>
                </Cell>
                <Cell col={12}><br/><br/></Cell>
                <Cell col={6}>
                    <h1 className="project-text">Overview</h1>
                    <p className="project-text">
                        Kontagion is a 2-D game that I completed using C++ for 
                        one of my programming classes. Though I did not create the
                        game engine or graphical framework, I implemented all the functionality
                        of the player, enemies, powerups, circular map, weapons,
                        player/game statistics, sound effects and more. 
                    </p>
                    <p className="project-text">
                        In Kontagion, the player plays as the hero Socrates, who is tasked with
                        disinfecting a circular pitri dish filled with dirt piles, pizza slices
                        and a host of dangerous bacteria and viruses. Among the most deadly of these
                        are Salmonella, Agressive Salmonella and E. Coli. Armed with only a disinfectant
                        spray bottle and a flamethrower, Socrates faces quite a perilous journey ahead.
                    </p>
                    <p className="project-text">
                        Upon killing an enemy bacteria there is a chance that it will turn into
                        a slice of pizza, which can be eaten by other living bacteria. Should a
                        bacteria eat three slices it will multiply. The Ecoli and Agressive Salmonella
                        track and follow Socrates around. Needless to say, this game is very difficult.
                    </p>
                    <h2 className="project-title">
                        <a style={{color:"white"}} href="https://github.com/alexginella/Kontagion/archive/master.zip">Download the code here</a>
                    </h2>
                </Cell>
                <Cell col={6}>
                    <img alt="Kontagion-gif" style={{width:"100%"}} src={require("../../images/Kontagion.gif")}/>
                </Cell>
            </Grid>
        );
    }
        
}

export default Kontagion;