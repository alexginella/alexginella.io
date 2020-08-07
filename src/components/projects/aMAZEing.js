import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class aMAZEing extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h1 className="project-title" style={{margin:"auto"}}>
                        aMAZEing Maze Generator and Solver
                    </h1>
                </Cell>
                <Cell col={6}>
                    <img alt="maze" style={{width:"100%", height:"100%"}} src={require("../../images/maze-with-labels.png")}/>
                </Cell>
                <Cell col={6}>
                    <p className="project-text" style={{fontSize:"20pt"}}>
                        aMAZEing is a Java program that uses a disjoint set data structure to generate
                        a square maze of variable dimension. The maze is represented as a square of hexadecimal
                        characters, each representing a walled segment of the maze. These segments can be visualized using the 
                        maze visualizer found at <a style={{color:"white"}} rel="noopener noreferrer" href="https://jeff.cis.cabrillo.edu/tools/cs21_maze_viewer" target="_blank">this site.</a>
                    </p>
                    <p className="project-text" style={{fontSize:"20pt"}}>
                        The program uses a breadth first search to traverse and solve the maze. The program outputs a
                        list of coordinate pairs representing the path through the maze. This path is then graphically
                        overlayed onto the maze when input into the visualizer. 
                    </p>
                    <h1>
                        <a className="project-text" href="https://github.com/alexginella/aMAZEing/archive/master.zip" target="blank">
                            Download the code here
                        </a>
                    </h1>
                </Cell>
                <Cell col={6}>
                    <h1 className="project-text">
                        Example Output:
                    </h1>
                </Cell>
                <Cell col={6}>
                    <h1 className="project-text">
                        Hexadecimal Encoding Scheme
                    </h1>
                </Cell>
                <Cell col={6}>
                    <img style={{width:"100%", height:"90%"}} alt="terminal-output" src={require("../../images/maze2-square.png")}/>
                </Cell>
                <Cell col={6}>
                    <img style={{width:"100%", height:"90%"}} alt="maze-sheet" src={require("../../images/maze-sheet-square.png")}/>
                </Cell>
            </Grid>
        );
    }
        
}

export default aMAZEing