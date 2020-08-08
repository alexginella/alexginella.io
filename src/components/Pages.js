import React from "react"
import Home from './homepage'
import {Switch, Route} from 'react-router-dom';
import Resume from "./Resume";
import AboutMe from "./aboutme";
import Projects from "./Projects";
import POSTagger from "./projects/POSTagger";
import aMAZEing from "./projects/aMAZEing";
import Kontagion from "./projects/Kontagion";
import CoronaCraft from "./projects/CoronaCraft";
import Music from "./Music";
import Volleyball from "./Volleyball";
import TwitBot from "./projects/TwitBot";
import Experience from "./Experience";

function Pages(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/music" component={Music}/>
            <Route path="/volleyball" component={Volleyball}/>
            <Route path="/experience" component={Experience}/>
            <div>
                <Route exact path="/projects" component={Projects}/>
                <div>
                    <Route path="/projects/POSTagger" component={POSTagger}/>
                    <Route path="/projects/aMAZEing" component={aMAZEing}/>
                    <Route path="/projects/kontagion" component={Kontagion}/>
                    <Route path="/projects/coronacraft" component={CoronaCraft}/>
                    <Route path="/projects/twitbot" component={TwitBot}/>
                </div>
            </div>
            
        </Switch>
    )
}

export default Pages