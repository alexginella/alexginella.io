import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class Home extends Component {
    render(){
        return (
            <div>
                <h2 className='text' style={{color:"white"}}>Hi,
                <p style={{color:"white"}}>this is me</p>
                </h2>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src='https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52432236_1037198939810804_2678420946716459008_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_oc=AQmw51Z33oFq1LeCAqiF0ugUBdb02KN77CZfdCuG5ECZY6S_VkrJkJW-_szCm-7f4dI&_nc_ht=scontent-sjc3-1.xx&oh=3275dea831d6971d489287355f1ba02b&oe=5F2DCD87' alt="pic" className="pic"/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;