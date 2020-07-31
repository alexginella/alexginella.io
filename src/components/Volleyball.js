import React, { Component } from "react"
import { Grid, Cell } from "react-mdl";

//<FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />

class Volleyball extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <h2 className="project-title">
                        Volleyball
                    </h2>
                </Cell>
            </Grid>
        );
    }
        
}

export default Volleyball;