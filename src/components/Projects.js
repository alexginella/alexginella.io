import React, {Component} from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Grid, Cell } from 'react-mdl';
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={12}>
                        <h1 className="title-text">
                            Projects
                        </h1>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.ibb.co/PMYh0m8/Corona-Craft2.png) '}}>CoronaCraft - React Web Application</CardTitle>
                            <CardText>
                                I created the base front end and implemented the backend web scraping
                                functionality using the puppeteer JavaScript library
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/CoronaCraft" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.ibb.co/88RX3W2/Screen-Shot-2020-07-24-at-2-54-03-PM.png) center / cover'}}>aMAZEing - Java</CardTitle>
                            <CardText>
                                Program uses a disjoint set data structure to randomly generate a maze,
                                then uses the breadth first search algorithm to find a path through the maze
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/aMAZEing" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/fG9FtDJ/POSTagger.png) center / cover'}}>Part of Speech Tagger - Haskell</CardTitle>
                            <CardText>
                                Program uses probabilistic finite state automata and data from the Brown corpus to 
                                tag words in a sentence with their part of Speech
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/POSTagger" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/s2GsLKc/Screen-Shot-2020-07-24-at-2-57-57-PM.png) center / cover'}}>Kontagion - C++</CardTitle>
                            <CardText>
                                2D Game that I completed using C++, disclaimer: I did not create the graphics framework or
                                game engine
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/Kontagion" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: 'white'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                    
                </Grid>
            </div>
        )
    }

}

/**
 * <Cell col={4}>
                        <Card shadow={1} style={{width: 'fit-content', margin: 'auto'}}>
                            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://support.appsflyer.com/hc/article_attachments/360001968989/twitter_logo.jpg) center/cover'}}>TwitBot - Python</CardTitle>
                            <CardText>
                                Working on a Twitter bot that automatically posts the negation of whatever Donald
                                Trump's latest post is
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <Link to="/Projects/TwitBot" style={{color: "blue", textDecoration: "none"}}>Check it out!</Link>
                                </Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
 */

export default Projects;