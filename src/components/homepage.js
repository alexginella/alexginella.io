import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class Home extends Component {
    render(){
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://avatars1.githubusercontent.com/u/43981904?s=460&u=ae9213325f7e5f2e8bc533a287c0a34fee967722&v=4' 
                             alt="pic" 
                             className="pic"/>
                        <h2 className='welcome-text'>Hi, Welcome to alexginella.io</h2>
                        
                    </Cell>
                    <Cell col={3}></Cell>
                    <Cell col={6}>
                        <p className="intro-text">Alex Ginella is a senior Computer Science and Linguistics undergraduate at
                                                  the University of California, Los Angeles. His interests include: coding,
                                                  linguistics, computational linguistics, artificial intelligence, volleyball and jazz.
                                                  He expects to graduate in the Spring of 2021 and hopes to pursue a career in 
                                                  Software Engineering and Entrepreneurship.</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;