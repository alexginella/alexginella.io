import React, { Component } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faFlagCheckered } from "@fortawesome/free-solid-svg-icons";
import 'react-vertical-timeline-component/style.min.css';

//<FontAwesomeIcon className="search-icon" icon={faSearch} size="sm" />

class Experience extends Component{
    render(){
        return(
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSuitcase} size="fa-5x"/>}>
                    <h3 className="vertical-timeline-element-title">King of Klom</h3>
                    <h4 className="vertical-timeline-element-subtitle">Klom, Androgena System</h4>
                    <p>
                        I rule with an iron fist
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSuitcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">Discoverer</h3>
                    <h4 className="vertical-timeline-element-subtitle">The Lost Moon of Pooche</h4>
                    <p>
                        I found it!! The lost moon of Pooche!
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSuitcase}/>}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Aptos, CA</h4>
                    <p>
                        This website, you're looking at now
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
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
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">University of California, Los Angeles</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor's in Computer Science and Linguistics</h4>
                    <p>
                        UPI honors society member
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    date="November 2012"
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
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faSchool}/>}
                >
                    <h3 className="vertical-timeline-element-title">Pacific Collegiate School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Diploma</h4>
                    <p>
                        Seal of biliteracy: French
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'red', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faFlagCheckered}/>}
                />
            </VerticalTimeline>
        );
    }
        
}

export default Experience;