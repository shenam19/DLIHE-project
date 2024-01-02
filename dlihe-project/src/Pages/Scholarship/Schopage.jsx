import React from 'react'
import upper from "/images/upper.png"
import pata from "/images/pata.jpeg"
import schofees from "/images/schofees.png"
import admission from "/images/admission.png"
import request from "/images/request.png"
import applyadd from "/images/applyadd.png"

import './Schopage.css'

export const Schopage = () => {
  return (
    <div className='schopage h-[100%] pt-[167px]'>
        <img className='simage' src={upper} alt="simage"/>
        <div className='container'>
            <div className='gap'>
                <div className='vline'></div>
                <h2 className='header2'>SCHOLARSHIP & FEES</h2>
            </div>
            <div className='content'>
                <a className='link' href="">TCV scholarships are tenable only for full-time, 
                regular courses that are approved by the TCV Scholarship Policy.
                </a>
                <p className='para1'>
                Tibetan Children's Village (TCV) provides full scholarships to the TCV wards who 
                are enrolled at The Dalai Lama Institute for Higher Education, Bangalore. 
                The TCV Scholarship Policy Committee may also, from time to time,
                announce specific specialisation scholarships based on merit, 
                and open to any bona-fide Tibetan student in keeping with the needs of the 
                organization and the Tibetan community at large.
                </p>
                <p className='para2'>TCV scholarships are tenable only for full-time, 
                regular courses that are approved by the TCV Scholarship Policy. 
                After completion of one's study or training, a scholar under TCV Scholarship 
                must give a status report in writing to the TCV Scholarship Program Office 
                so that the scholar is relieved from higher studies scholarship enrolment, 
                and for possible placement within TCV or in the Tibetan community in exile.
                </p>
                <div className='content2'>
                    <h2 className='secheader'>
                        DLIHE Scholarship & Merit scholarship Policy Related Matters:
                    </h2>
                    {/* <hr className='hr1'/> */}
                    <div className='hr1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1138" height="2" viewBox="0 0 1138 2" fill="none">
                            <path d="M1 1L1137 1.0001" stroke="#FDB714" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <ol className='olist'>
                        <li>
                            A candidate will forfeit his/her scholarship if he/she gets less than 50% aggregate.
                        </li>
                        <li>
                            If a candidate of regular courses does not meet 85% attendance requirement of 
                            the institution but meets 75% University of Mysore attendance requirement, 
                            he/she will pay his/her own examination fee.
                        </li>
                        <li>
                            A Specialized Program candidate's attendance requirement is 85% under the regulation 
                            of the University of Mysore. A candidate who does not meet 85% will be considered 
                            dropped from that course.
                        </li>
                        <li>
                            A candidate with less than 75% attendance in any one subject in regular courses will 
                            not be allowed to take exam in all the subjects, which means he/she is considered failed 
                            and will repeat the semester. For repeat period, a candidate will not qualify for 
                            scholarship from TCV for that semester.
                        </li>
                        <li>
                            To encourage and motivate students, merit scholarship of Rs. 7000.00 will be awarded 
                            for students obtaining an aggregate 85% for regular programs and 90% for specialized 
                            programs each academic year.
                        </li>
                        <li>
                            In case a student withdraws from the college before completing the course, 
                            he/she will be asked to refund the tuition fee, eligibility fee, registration 
                            fee and examination fee (if paid) to the University of Mysore by the institution.
                        </li>
                    </ol>
                </div>
                <div className='content3'>
                    <h3 className='headerh3'>Fee Structure - Monthly basis</h3>
                    {/* <hr className='hr2'/> */}
                    <div className='hr2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1138" height="2" viewBox="0 0 1138 2" fill="none">
                            <path d="M1 1L1137 1.0001" stroke="#FDB714" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <ul className='ulist'>
                        <li>
                            Fees are charged for 12 months of the year.
                        </li>
                        <li>
                            Fees are payable either in full or in two installments, due in January and July.
                        </li>
                        <li>
                            Payment must be made on time.
                        </li>
                        <li>
                            Payment may be made either in cash or through a bank draft in the name of the Dalai 
                            Lama Institute for Higher Education, Bangalore
                        </li>
                        <li>
                            All students may register for TCV Mutual Health Insurance.
                        </li>
                    </ul>
                </div>
                <div className='content4'>
                    <h3 className='headerh4'>FOR ANY FURTHER QUERIES:</h3>
                    {/* <hr className='hr3'/> */}
                    <div className='hr3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1138" height="2" viewBox="0 0 1138 2" fill="none">
                            <path d="M1 1L1137 1.0001" stroke="#FDB714" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </div>
                    <p id='paragraph'>For all matters regarding Scholarship, please contact the Principal.</p>
                </div>
                <div className='content5'>
                    <h2 className='header2'>
                        EXPLORE MORE ABOUT SCHOLARSHIP & FEES 
                        <div className='sub2'>
                            {/* <hr className='hr4'/> */}
                            <div className='hr4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="528" height="4" viewBox="0 0 528 4" fill="none">
                                    <path d="M2 2L526 2.00005" stroke="#FDB714" stroke-width="4" stroke-linecap="round"/>
                                </svg>
                            </div>
                            <img className='pataimage' alt="pata" src={pata}/>
                            {/* <hr className='hr5'/> */}
                            <div className='hr5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="535" height="4" viewBox="0 0 535 4" fill="none">
                                    <path d="M2 2H533" stroke="#FDB714" stroke-width="4" stroke-linecap="round"/>
                                </svg>
                            </div>
                        </div>
                        <div className='sub3'>
                            <div className="schofees">
                                <a href="" target="_blank">
                                    <div className="overlay-content1">
                                    <div className="content-details fadeIn-bottom">
                                        <h3>SCHOLARSHIP AND FEES</h3>
                                    </div>
                                    </div>
                                    <img className="content-image" alt="dl" src={schofees} />
                                </a>  
                            </div>
                            <div className="admission">
                                <a href="" target="_blank">
                                    <div className="overlay-content2">
                                    <div className="content-details fadeIn-bottom">
                                        <h3>ADMISSION</h3>
                                    </div>
                                    </div>
                                    <img className="content-image" alt="dl" src={admission} />
                                </a>  
                            </div>
                            <div className="request">
                                <a href="" target="_blank">
                                    <div className="overlay-content3">
                                    <div className="content-details fadeIn-bottom">
                                        <h3>REQUEST INFORMATION</h3>
                                    </div>
                                    </div>
                                    <img className="content-image" alt="dl" src={request} />
                                </a>  
                            </div>
                            <div className="applyadd">
                                <a href="" target="_blank">
                                    <div className="overlay-content4">
                                    <div className="content-details fadeIn-bottom">
                                        <h3>APPLY ADMISSION</h3>
                                    </div>
                                    </div>
                                    <img className="content-image" alt="dl" src={applyadd} />
                                </a>  
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}



