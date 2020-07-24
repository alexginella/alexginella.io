import React from "react"
import Home from './homepage'
import {Switch, Route} from 'react-router-dom';
import Resume from "./resume";
import AboutMe from "./aboutme";
import Projects from "./Projects";
import Cplus from "./Cplus";
import Java from "./Java";
import Python from "./Python";

function Pages(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Aboutme" component={AboutMe} />
            <div>
                <Route exact path="/Projects" component={Projects}/>
                <div>
                    <Route path="/Projects/C++" component={Cplus}/>
                    <Route path="/Projects/Java" component={Java}/>
                    <Route path="/Projects/Python" component={Python}/>
                </div>
            </div>
            
        </Switch>
    )
}

export default Pages