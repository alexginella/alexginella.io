import React from "react"
import Home from './homepage'
import {Switch, Route} from 'react-router-dom';
import Resume from "./Resume";
import AboutMe from "./aboutme";
import Projects from "./Projects";
import Cplus from "./projects/Cplus";
import Java from "./projects/Java";
import Python from "./projects/Python";
import POSTagger from "./projects/POSTagger";
import aMAZEing from "./projects/aMAZEing";
import Kontagion from "./projects/Kontagion";

function Pages(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Aboutme" component={AboutMe} />
            <div>
                <Route exact path="/Projects" component={Projects}/>
                <div>
                    <Route path="/Projects/POSTagger" component={POSTagger}/>
                    <Route path="/Projects/aMAZEing" component={aMAZEing}/>
                    <Route path="/Projects/Kontagion" component={Kontagion}/>
                </div>
            </div>
            
        </Switch>
    )
}

export default Pages