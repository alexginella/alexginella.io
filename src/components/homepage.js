import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
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
                            <CIcon name="cis-magnifying-glass" size="2xl"/>
                            alex ginella computer science
                        </h2>
                    </Cell>
                    <Cell col={3}></Cell>
                    <Cell col={6}>
                        <p className="intro-text">Alex Ginella is a senior Computer Science and Linguistics undergraduate at
                                                  the University of California, Los Angeles. His interests include: coding,
                                                  linguistics, computational linguistics, artificial intelligence, volleyball and jazz.
                                                  He expects to graduate in the Spring of 2021 and hopes to pursue a career in 
                                                  Software Engineering and Entrepreneurship.</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;