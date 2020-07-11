import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class Home extends Component {
    render(){
        return (
            <div>
                <h2 style={{color:"white"}}>Hi,</h2>
                <p style={{color:"white"}}>hire me bitch</p>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;