import React, {Component} from 'react'
import { Cell, Grid } from 'react-mdl'

class Resume extends Component {
    render(){
        return (
            <div>
                <p></p>
                <h2 className="welcome-text">Resume</h2>
                <Grid>
                    <Cell style={{textAlign:"center"}} col={3}>
                        <a style={{fontSize:"20pt"}} className="welcome-text" rel="stylesheet" href="https://docs.google.com/document/d/182ofZSJR9y4GEHKDQK8B3WR5QzKYTG8KA8JEl5Pm0zg/edit?usp=sharing">Shareable Link</a>
                    </Cell>
                    <Cell style={{textAlign:"center"}} col={6}>                        
                        <iframe style={{width:"850px", height:"900px",frameborder:"0"}} src="https://docs.google.com/document/d/e/2PACX-1vR_gP_l_4bwD66HUFoHKcHQgDUNITgYvHeU4_BGQ0YC5tWQ5DwpwyxRuaUXhUnysU6BLGPYgnRnIlW3/pub?embedded=true"></iframe>
                    </Cell>
                    <Cell col={3}>
                    <i class="cis-magnifying-glass"></i>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;