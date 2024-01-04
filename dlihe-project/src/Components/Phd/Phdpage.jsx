
import ugprograms from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/ugprograms.png'
import ba from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/ba.png'
import bca from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/bca.png'
import bcom from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/bcom.png'
import bba from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/bba.png'
import phd from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/phd.png'
import facstaf from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/facstaf.png'
import pata1 from '/Users/tenzinkalden/Desktop/DLIHE-project/dlihe-project/public/images/pata.jpeg'
import './Phdpage.css'

 const Phdpage = () => {
  return (
    <div className='mainphd pt-[12%]' >
        <div className='pfirst'>
            <div className='lfirst'>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="41" viewBox="0 0 6 41" fill="none">
                    <path d="M3 3L3 38" stroke="#FDB714" stroke-width="5" stroke-linecap="round"/>
                </svg>
            </div>
            <h2 className='hfirst'>Degree of Doctor of Philosophy (Ph.D) in Tibetan Studies </h2>
        </div>
        <div className='psecond'>
            <h3 className='h3first'>Aims and Objectives of the Research Centre</h3>
            <hr className='fline'/>
            <p className='parafirst'>The Research Centre for Tibetan Studies was established to 
                fulfill the vision of His. Holiness the Dalai Lama and the long-term goals of the TCV 
                administrators spear headed by Ama Jestun Pema. The Research Centre will offer 
                opportunities to interested students to do research on topics mentioned below under 
                article 4. Those who successfully complete the research studies will be able to serve 
                the needs of the community and humanity at large in an exemplary way. Through this 
                program, the unique Tibetan culture and tradition will be studied and disseminated 
                using modern research methodologies. The exceptional educational wisdom of the 
                countless Tibetan scholars of several centuries ago, whose fascination was neither 
                wealth nor fame but education and studied for the well-being of people and humanity 
                at large. This body of ancient wisdom will be made accessible to the coming 
                generations through such research opportunities. This new and rare research 
                opportunity will be made available for our young learners especially those 
                graduating from the different monastic universities and Higher Tibetan Institutions 
                for whom this formal research opportunity becomes imperative to bring them in par with 
                the international standards of education. Such students will now be able to pursue a 
                Ph.D. Degree in Tibetan Studies through a modern education system and get the necessary
                modern certification recognized the world over.
            </p>
        </div>
        <div className='pthird'>
            <h3 className='h3second'>research topics</h3>
            <hr className='sline'/>
            <ol className='olfirst list-decimal'>
                <li className='li1 list-decimal'>General: Tibetan Literature, Language, History, Medicine and Astrology, etc.</li>
                <li className='li1 list-decimal'>Buddhist Studies: Pramita, Madyamika, Pramana, Abhidharma, Vinaya, Tantra, Meditation and Practice, etc.</li>
            </ol>
        </div>
        <div className='pfourth'>
            <h2 className='efirst'>explore other programs</h2>
            <div className='all'>
                <div className='uppline'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="530" height="4" viewBox="0 0 530 4" fill="none">
                        <path d="M2 2L528 1.99995" stroke="#FDB714" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>
                <img className='pata1' src={pata1} alt="pata1"/>
                <div className='lowline'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="542" height="4" viewBox="0 0 542 4" fill="none">
                        <path d="M2 2H540" stroke="#FDB714" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='boxes'>
            <div className='boxfline'>
                <div className="ugprograms">
                        <a href="" target="_blank">
                            <div className="content-over">
                            <div className="cont-details fadeIn-bottom">
                                <h3>ug programs under bangalore university</h3>
                            </div>
                            </div>
                            <img className="content-image" alt="ugprograms" src={ugprograms} />
                    
                        </a>  
                </div>
                <div className="ba">
                        <a href="" target="_blank">
                            <div className="content-over1">
                            <div className="cont-details1 fadeIn-bottom">
                                <h3>bachelor of arts (ba)</h3>
                            </div>
                            </div>
                            <img className="content-image" alt="ba" src={ba} />
                    
                        </a>  
                </div>
                <div className="bca">
                        <a href="" target="_blank">
                            <div className="content-over2">
                            <div className="cont-details2 fadeIn-bottom">
                                <h3>bachelor of computer application (bca)</h3>
                            </div>
                            </div>
                            <img className="content-image" alt="bca" src={bca} />
                    
                        </a>  
                </div>
                <div className="bcom">
                        <a href="" target="_blank">
                            <div className="content-over3">
                            <div className="cont-details3 fadeIn-bottom">
                                <h3>bachelor of commerce (bcom) </h3>
                            </div>
                            </div>
                            <img className="content-image" alt="bcom" src={bcom} />
                    
                        </a>  
                </div>

            </div>
            <div className='boxsline'>
                <div className="bba">
                            <a href="" target="_blank">
                                <div className="content-over4">
                                <div className="cont-details4 fadeIn-bottom">
                                    <h3>bachelor of business administration (bba)</h3>
                                </div>
                                </div>
                                <img className="content-image" alt="bba" src={bba} />
                        
                            </a>  
                    </div>
                <div className="phd">
                            <a href="" target="_blank">
                                <div className="content-over5">
                                <div className="cont-details5 fadeIn-bottom">
                                    <h3>degree of doctor of philosophy (phd) in tibetan studies</h3>
                                </div>
                                </div>
                                <img className="content-image" alt="phd" src={phd} />
                        
                            </a>  
                    </div>
                <div className="facstaf">
                            <a href="" target="_blank">
                                <div className="content-over6">
                                <div className="cont-details6 fadeIn-bottom">
                                    <h3>faculty & staff</h3>
                                </div>
                                </div>
                                <img className="content-image" alt="facstaf" src={facstaf} />
                        
                            </a>  
                    </div>
            </div>
         </div>
    </div>
  )
}

export default Phdpage