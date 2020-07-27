import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class AboutMe extends Component {
    render(){
        return (
            <Grid>
                <Cell col={12}>
                    <h1 className="title-text">Who am I?</h1>
                </Cell>
                <Cell col={3}/>
                <Cell col={6}>
                    <p className="about-me">Alex Ginella is a senior Computer Science and Linguistics undergraduate at
                                              the University of California, Los Angeles. His interests include: coding,
                                              linguistics, computational linguistics, artificial intelligence, volleyball and jazz.
                                              He expects to graduate in the Spring of 2021 and hopes to pursue a career in 
                                              Software Engineering and Entrepreneurship.</p>
                </Cell>
            </Grid>
        )
    }
}

export default AboutMe;