import React, { Component } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**import { faSuitcase } from "@fortawesome/free-solid-svg-icons";*/
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import 'react-vertical-timeline-component/style.min.css';

//<FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />

/**
 * <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        date="2006 - 2008"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faSuitcase}/>}
    >
        <h3 className="vertical-timeline-element-title">Warzone Champion</h3>
        <h4 className="vertical-timeline-element-subtitle">Aptos, CA</h4>
        <p>
            Yeah... I won a few games, nbd
        </p>
    </VerticalTimelineElement>
 */

class Experience extends Component{
    render(){
        return(
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="Octorber 2020 - Present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSuitcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">Undergraduate Researcher</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of California, Los Angeles</h4>
                    <p>
                        Creating and modifying a data mining tool using word2vec, and a neural network trained on material science journal
                        articles with the goal of automatically extracting material science data.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="2019 - June 2021"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">University of California, Los Angeles</h3>
                    <h4 className="vertical-timeline-element-subtitle">B.A Computer Science and Linguistics</h4>
                    <p>
                        UPI honors society member
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="2017 - 2019"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">Cabrillo College</h3>
                    <h4 className="vertical-timeline-element-subtitle">Associate's of Computer Science, Mathematics, Engineering, Liberal Arts</h4>
                    <p>
                        Honors Scholar Designation
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="2011 - 2017"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">Pacific Collegiate School</h3>
                    <h4 className="vertical-timeline-element-subtitle">High School Diploma</h4>
                    <p>
                        Seal of biliteracy: French
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{display:"inline-block", textAlign:"center", background: 'red', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFlagCheckered}/>}
                />
            </VerticalTimeline>
        );
    }
        
}

export default Experience;