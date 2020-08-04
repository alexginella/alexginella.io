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
                        <iframe style={{width:"850px", height:"900px",frameborder:"0"}} src="https://docs.google.com/document/d/e/2PACX-1vR_gP_l_4bwD66HUFoHKcHQgDUNITgYvHeU4_BGQ0YC5tWQ5DwpwyxRuaUXhUnysU6BLGPYgnRnIlW3/pub?embedded=true"></iframe>
                    </Cell>
                    <Cell col={3}></Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;