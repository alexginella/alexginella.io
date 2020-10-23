import React, {Component} from 'react'
import { Cell, Grid } from 'react-mdl'

class Resume extends Component {
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <h2 className="title-text">Resume</h2>
                    </Cell>
                    <Cell style={{textAlign:"center"}} col={3}>
                        <a style={{fontSize:"20pt"}} className="title-text" target="blank_" href="https://docs.google.com/document/d/182ofZSJR9y4GEHKDQK8B3WR5QzKYTG8KA8JEl5Pm0zg/edit?usp=sharing">Shareable Link</a>
                    </Cell>
                    <Cell style={{textAlign:"center"}} col={6}>                        
                        <iframe title="resume" style={{width:"850px", height:"900px",frameborder:"0"}} src="https://docs.google.com/document/d/e/2PACX-1vR9AQjRBOPV1628RY4HmghsVnDJ07NoBIudHzvy2nHuD1cuu2HEJI9LjzfiTCYqfSng1N_9GN2oQiuX/pub?embedded=true"></iframe>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;