import React from 'react'
import pata from "/images/pata.jpeg"
import dl from "/images/dl.png"
import amala from "/images/amala.png"
import eduapp from "/images/eduapp.png"
import library from "/images/library.png"
import philosophy from "/images/philosophy.png"
import mission from "/images/mission.png"
import faculty from "/images/faculty.png"
import impact from "/images/impact.png"
import gallery from "/images/gallery.png"
import visitors from "/images/visitors.png"
import update from "/images/update.png"
import opportunity from "/images/opportunity.png"
import campus from "/images/campus.png"

import './Epage'

export const Epage = () => {
  return (
    <div className='Epage'>
        <h2>EXPLORE MORE ABOUT DLIHE</h2> 
        <div className='UpperP'>
            <div id="line1">
                <svg xmlns="http://www.w3.org/2000/svg" width="528" height="4" viewBox="0 0 528 4" fill="none">
                    <path d="M2 2L526 2.00005" stroke="#FDB714" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
            <img id="img" src={pata} alt="pata"/>
            <div id="line2">
                <svg xmlns="http://www.w3.org/2000/svg" width="535" height="4" viewBox="0 0 535 4" fill="none">
                    <path d="M2 2H533" stroke="#FDB714" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <div className='overall'>  
             <div className='fline'>
                <div className="dlmessage">
                       <a href="" target="_blank">
                        <div className="content-overlay">
                        <div className="content-details fadeIn-bottom">
                            <h3>Dalai Lama Message</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={dl} />
                       
                    </a>  
                </div>
                <div className="amamessage">
                       <a href="" target="_blank">
                        <div className="content-overlay1">
                        <div className="content-details fadeIn-bottom">
                            <h3>AMALA'S MESSAGE</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={amala} />
                       
                    </a>  
                </div>
                <div className="eduapproach">
                       <a href="" target="_blank">
                        <div className="content-overlay2">
                        <div className="content-details fadeIn-bottom">
                            <h3>Our Educational Approach</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={eduapp} />
                       
                    </a>  
                </div>
                <div className="library">
                       <a href="" target="_blank">
                        <div className="content-overlay3">
                        <div className="content-details fadeIn-bottom">
                            <h3>library</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={library} />
                       
                    </a>  
                </div>
            </div>
            <div className='sline'>
                <div className="philosophy">
                       <a href="" target="_blank">
                        <div className="content-overlay4">
                        <div className="content-details fadeIn-bottom">
                            <h3>our philosophy</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={philosophy} />
                    </a>  
                </div>
                <div className="mission">
                       <a href="" target="_blank">
                        <div className="content-overlay5">
                        <div className="content-details fadeIn-bottom">
                            <h3>mission and strategic</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={mission} />
                    </a>  
                </div>
                <div className="faculty">
                       <a href="" target="_blank">
                        <div className="content-overlay6">
                        <div className="content-details fadeIn-bottom">
                            <h3>faculty and staff</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={faculty} />
                    </a>  
                </div>
            </div>
            <div className='tline'>
                <div className="impact">
                       <a href="" target="_blank">
                        <div className="content-overlay7">
                        <div className="content-details fadeIn-bottom">
                            <h3>dlihe impact</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={impact} />
                    </a>  
                </div>
                <div className="gallery">
                       <a href="" target="_blank">
                        <div className="content-overlay8">
                        <div className="content-details fadeIn-bottom">
                            <h3>photo gallery</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={gallery} />
                    </a>  
                </div>
                <div className="visitors">
                       <a href="" target="_blank">
                        <div className="content-overlay9">
                        <div className="content-details fadeIn-bottom">
                            <h3>dlihe visitors</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={visitors} />
                    </a>  
                </div>
                <div className="update">
                       <a href="" target="_blank">
                        <div className="content-overlay10">
                        <div className="content-details fadeIn-bottom">
                            <h3>project update</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={update} />
                    </a>  
                </div>
            </div>
            <div className='foline'>
                <div className="opportunity">
                       <a href="" target="_blank">
                        <div className="content-overlay11">
                        <div className="content-details fadeIn-bottom">
                            <h3>faculties and opportunities</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={opportunity} />
                    </a>  
                </div>
                <div className="campus">
                       <a href="" target="_blank">
                        <div className="content-overlay12">
                        <div className="content-details fadeIn-bottom">
                            <h3>dlihe campus map</h3>
                        </div>
                        </div>
                        <img className="content-image" alt="dl" src={campus} />
                    </a>  
                </div>

            </div>
        </div>
    </div>
  )
}
