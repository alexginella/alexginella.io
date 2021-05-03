import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'

class AboutMe extends Component {
    render(){
        return (
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img src={require("../images/friedmeme.jpg")} className="pic" alt="funny pic of me"/>
                    <h1 className="title-text">Who am I?</h1>
                </Cell>
                <Cell col={12}>
                    <p className="about-me">Alex Ginella is a senior computer science and linguistics undergraduate at
                                              the University of California, Los Angeles. His interests include: coding,
                                              linguistics, computational linguistics, artificial intelligence, volleyball and jazz.
                                              He expects to graduate in the Spring of 2021 and hopes to pursue a career in 
                                              software engineering and entrepreneurship.</p>
                </Cell>
            </Grid>
        )
    }
}

export default AboutMe;