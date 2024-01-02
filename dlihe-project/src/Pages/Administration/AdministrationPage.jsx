import React from "react";
import upper from "/images/upper.png";
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

import './epage.css'

const AdministrationPage = () => {
  return (
    <>
      <div className=" schopage text-gray-800">
        <img className="simage" src={upper} alt="simage" />

        <div className="w-4/5 ml-32 mt-16">
          <div className="w-full h-16 pl-2 mt-15 mb-4 flex items-center border-l-4 border-yellow-500 text-red-700">
            <h1 className="text-[80px] font-[750] text-[#9A0002]">
              ADMINISTRATION
            </h1>
          </div>
          <h5 className="text-yellow-500 pl-4 mb-10 underline">
            the administrative bodies of DLIHE
          </h5>

          <div className="w-full min-h-30 pl-1 mb-10">
            <p>
              The DLIHE has a forty-acre campus and is basically a resident
              Institute. It provides comfortable resident facilities for
              students and faculty members. DLIHE has well-planned
              infrastructure and very qualified faculty members to run the
              programs. Its programs are unique and a rarity in the world. The
              following Councils and Bodies help in its planning, development,
              and management process. The DLIHE has a Governing Council,
              Academic Advisory Council, Managing Council, Academic Council, and
              the Examination Committees who meet periodically to discuss policy
              and the Institute’s regulation matters.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-red-700 text-4xl font-bold mb-5">
              ADMINISTRATIVE STRUCTURE
            </h3>
            <hr className="h-[.15rem] border-0 bg-yellow-500 mb-15" />

            <h2 className="text-yellow-500 text-4xl my-10 text-left">
              TCV governing body
            </h2>
            <p className="h-50 pl-1 text-left">
              This is the apex legal body responsible for the affairs of the TCV
              Organization in keeping with its mission statement. The CTA
              Education Kalon (Minister) is the Chairman, appointed by His
              Holiness the Dalai Lama.
            </p>

            <h2 className="text-yellow-500 text-4xl my-10 text-left">
              TCV executive council
            </h2>
            <p className="h-50 pl-1 text-left">
              The policy decision-making body to guide the Head Office generally
              and more so in the matter of finance and project/program
              developments.
            </p>

            <h2 className="text-yellow-500 text-4xl my-10 text-left">
              TCV head office
            </h2>
            <p className="h-50 pl-1 text-left">
              The Presidential Office is the central hub of the organization
              with executive power for overall responsibility to oversee and
              ensure the smooth functioning of all TCV units with necessary
              coordination, monitoring and evaluation on a regular basis.
            </p>

            <h2 className="text-yellow-500 text-4xl my-10 text-left">
              DLIHE managing council
            </h2>
            <p className="h-50 pl-1 text-left mb-12">
              Managing Council is the apex body for Academic Policy decisions.
              As per the Memorandum of Understanding, members comprise of
              officials both from the University of Mysore and the DLIHE as
              follows:
            </p>
          </div>

          <h2 className="h-30 text-5xl  text-red-700 mb-5">Members</h2>

          <hr className="h-[.15rem] border-0 bg-yellow-500" />

          <div className="flex justify-between text-2xl px-10" id="main-div">
            <div id="inner1" className="">
              <ol className="flex flex-col">
                <li className="my-5">1 Honorable VC -</li>
                <li className="my-5">2 DLIHE Principal -</li>
                <li className="my-5">3 Register (UoM) -</li>
                <li className="my-5">4 PEMP (UoM) -</li>
                <li className="my-5">5 Syndicate Member (UoM) -</li>
                <li className="my-5">6 Director, Outreach Program (UoM) -</li>
                <li className="my-5">
                  7 Chairman, BoS, Specialized Program (UoM) -
                </li>
                <li className="my-5">8 President (TCV-Head Office) -</li>
                <li className="my-5">9 Vice-Principal (DLIHE) -</li>
                <li className="my-5">10 HoD-Tibetan Department (DLIHE) -</li>
                <li className="my-5">11 HoD-Chinese Department (DLIHE) -</li>
              </ol>
            </div>

            <div id="inner2" className="  mb-10 ">
              <ul className="flex flex-col">
                <li className="my-5">Chairperson</li>
                <li className="my-5">Member Secretary</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
                <li className="my-5">Member</li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-2xl font-thin italic">
              <span className="text-red-700 font-bold ">Note:</span> A Managing
              Council Of Not Less Than Eight Will comprise Its Qurum
            </p>
          </div>

          <div id="base" className="pl-5 mb-10 text-2xl font-light">
            <p>
              <span className="text-red-700 font-bold">
                Institute Governing Council:
              </span>{" "}
              This council emerged with a resolution of the Executive Council.
              It functions with the chairman and the Principal of the institute
              as the member Secretary. The TCV Head Office nominates the other
              members from within TCV organization and without - with an eye on
              external experts.
            </p>
          </div>
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
        </div>
    </>
  );
};

export default AdministrationPage;
