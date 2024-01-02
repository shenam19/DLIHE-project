import React from 'react'
import dlihe from '/images/dlihe.png'
import facebook from '/images/Facebook_Logo.png'
import twiit2 from '/images/twiit2.png'
import insta2 from '/images/insta2.png'
import ytube1 from '/images/ytube1.png'

const Lowerfoot = () => {
  return (
    <div className='foot'>
        <footer className="second">
        <div>
            <img className="dlihe" src={dlihe} alt="dlihe-logo"/>
            <div className="logo">
              <a href={"https://www.facebook.com/dlihe2008/"} ><img className="face" src={facebook} alt="facebook"/></a>
              <a href={"https://twitter.com/TheDLIHE"} ><img className="twitt" src={twiit2} alt="twitter"/></a>
              <a href={"https://www.instagram.com/dlihesc/"} ><img className="insta" src={insta2} alt="instagram"/></a>
              <a href={"https://www.youtube.com/@thedalailamainstituteforhi7431"} ><img className="youtube" src={ytube1} alt="youtube"/></a>
            </div>
         </div>
        <div className="vl"></div>
         <div className="address">
            <h3 id='address1'>Address</h3>
            <p id='para'>Mysore Road,Hejjala Post,Bidadi Hobli Ramnagar Distt.Bangalore -562 109 India</p>
            <div id='bAdd'>
              <a className='cmap' href={"https://maps.app.goo.gl/6Q5QDhKZxpEzK6xt9"}><div>Campus Map</div></a>
              <a className='ppol' href={""}><div>Privacy policy</div></a>
            </div>
         </div>
         <div className="publicate">
            <h3 id='public'>PUBLICATIONS</h3>
            <ul id='para1'>
                <a href={""}><li>Tibetan Periodic</li></a>
                <a href={""}><li>English Periodic</li></a>
                <a href={""}><li>Chinese Periodic</li></a>
                <a href={""}><li>Student Write-Ups</li></a>
            </ul>
         </div>
         <div className="related">
            <h3 id='rel'>Related Sites</h3>
            <ul id='para2'>
                <a href={"https://tcv.org.in/"}><li>TCV School</li></a>
                <a href={"https://tibet.net/department/education/"}><li>Department of Education</li></a>
                <a href={"https://dalailamatrust.org/"}><li>The Dalai lama Trust</li></a>
                <a href={"https://tibetfund.org/"}><li>The Tibet Fund</li></a>
                <a href={"https://uni-mysore.ac.in/"}><li>University of Mysore</li></a>
                <a href={"https://bangaloreuniversity.karnataka.gov.in/"}><li>Bangalore University</li></a>
                <a href={"https://sicgu.org/"}><li>Scholastic Institute Chokyi Gyaltsen</li></a>
            </ul>
         </div>

        </footer>
        <p className="copyright">2023-Dalai Lama Institute For Higher Education Website Design & Developed by PGD Full-Stack-Student.</p>
    </div>
  )
}

export default Lowerfoot