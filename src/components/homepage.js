import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MagnifyingGlass from './MagnifyingGlass';
import '../App.css'

class Home extends Component {
    render(){
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://lh3.googleusercontent.com/vFrZjIP_JpMQvB49ogsHuNzaQBAiivdYRqo6z7bAaZfDUPlNtJZx2UVotmorpPYVkJNlgtGyVAXi2IQ5PR8-aKMKDJa6h1zkfVt4abiKAaOXaSOy1RtLcCmjAi8ctBLM1FvpyFAzWapXIW84YcsyQbK-GDUHCPJl8DwbiJY8euqL0Qzh0XLaPti3bIWmp6mASG_n3Kzt49YtN6XLRqWK45w0WtoZB2qW5zYRMcZxP42ZyqNpilTiNTTEMFto_1H66xI9egUBSOnNFJ-qyObh0eLRl8L6Qgx5MQVdXwBq2Mvd0Sz38B-jKpH5LWpkWzbxI-tkHhfSUEJmS-4ySsYWi1NUmO-Wo6M9iycrmaHqEHmcmenxd1KFJ9sEY25KMoSoiL-ayZq_L6Jbb7deIWn4Z4y0rEtzJyPvAyfWEbsip2xbh4nanHOKKHJXxi6Wp4-xraMgqOznD9Z4nM_92euK1ro7x2GzQHAwPKKYyVg_BtTh5pU2jL9pS3l3qufmBx52xeWuSbYd1cLrsJu-qPqFy_kOa57nRByf_Qh_PVPtG99lNw7AH9qnF_ZTMWPxPh7-qq4tbaS4WkbpetrmHJlOA7ZloDGCA1tGAT-RSwXmsd4h-S-PifgyIXgfJKRCSybsp2jloRdfJGi78DilyRCN2SssPQUNyjK7wD1efHCOMkKGemK1DoJsxCO8qprEvPg=s937-no?authuser=0" 
                             alt="pic" 
                             className="pic"/>
                        <h2 className='search-bar'>
                            <FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />
                            alex ginella<span style={{opacity:".5"}}> ... computer science</span>
                        </h2>
                    </Cell>
                    <Cell col={3}></Cell>
                    <Cell col={6}>
                        <div className="search-results">
                            <p className="intro-text">alex ginella <strong>c++</strong></p>
                            <p className="intro-text">alex ginella <strong>Java</strong></p>
                            <p className="intro-text">alex ginella <strong>JavaScript</strong></p>
                            <p className="intro-text">alex ginella <strong>React</strong></p>
                            <p className="intro-text">alex ginella <strong>Python</strong></p>
                            <p className="intro-text">alex ginella <strong>Computational Linguistics</strong></p>
                            <p className="intro-text">alex ginella <strong>Volleyball</strong></p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;