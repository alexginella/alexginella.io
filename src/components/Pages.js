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
import CoronaCraft from "./projects/CoronaCraft";
import Music from "./Music";
import Volleyball from "./Volleyball";

function Pages(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Aboutme" component={AboutMe} />
            <Route path="/Music" component={Music}/>
            <Route path="/Volleyball" component={Volleyball}/>
            <div>
                <Route exact path="/Projects" component={Projects}/>
                <div>
                    <Route path="/Projects/POSTagger" component={POSTagger}/>
                    <Route path="/Projects/aMAZEing" component={aMAZEing}/>
                    <Route path="/Projects/Kontagion" component={Kontagion}/>
                    <Route path="/Projects/CoronaCraft" component={CoronaCraft}/>
                </div>
            </div>
            
        </Switch>
    )
}

export default Pages