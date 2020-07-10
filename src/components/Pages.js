import React from "react"
import Home from './homepage'
import {Switch, Route} from 'react-router-dom';
import Resume from "./resume";
import AboutMe from "./aboutme";

function Pages(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/aboutme" component={AboutMe} />
        </Switch>
    )
}

export default Pages