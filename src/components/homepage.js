import React, {Component} from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class Home extends Component {
    render(){
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://lh3.googleusercontent.com/minGc7uFZithcvUyujkF7gWvgtUbIuJAGv37y79fab9oQW4SbXGQ9CM4Xz_KRyHtRGyVl5pfCsXQFjzD4YfLZ9QzEuH1qYF_ntCSOHujsZqFtt8GulrEHV9fRGnPhVbu3kQYG0kQKfdLUbAAu3AOJ6FDf4WjIY6bFG2QfbN8bZfEz_bjxN9yUTipbrxGkZixDluty3hEvuvCOdPHkN57Wj53vc9m-TRZaULFMP2GodxLnbeAaWjrMFYMRmB4L_IWdnMPYiOtFnHLAhfzJ0n6dhoHR-PruwFxlmI_D7Ov6oAWWW-DpG-F1LDdsd_hkDpZUNEOfS2UK9Jtcz1snpPTfaJUpFQtc9g7XqPqb-d_6_Oz-yD9JBEcLhHLcSvK-oQarMmZGoV8bOTUwRY5xWyKS-OunA-jDsaRx5UvwKPsf9SyL1id8gXRJjoT7NG6jzKS06OH3KgLLHv66-fHHaKU1oUXIpPMowRMOrKy08x2N-1yNSQmblSfMiUnjM21W6GNzd3CvzTh9LtZzxOh46AfUaSqciMGwcYRUn_IoU47oUDDDxAhKyJXAQeIEZPae87DoQTV_mFVgp-spKVSRxw1vG1QvVz6x6GSXdF9rKa7hR5XvGYrE-i7cK14i3C0FOMQ05qRk8s6h1v8A8mEoSBrwMXnZZXVxP6hDYoUiR_jJ1a6A_sQ-MxbgmqXsjTf1dE=s937-no?authuser=0" 
                             alt="pic" 
                             className="pic"/>
                        <h2 className='search-bar'>
                            <i class="cis-magnifying-glass"></i>
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