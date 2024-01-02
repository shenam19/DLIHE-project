import React from "react";
import Sample from "/images/sample.jpg";

const Campus = () => {
  return (
    <div>
      <div className=" flex items-center gap-5 ml-40">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
        <h1 className=" text-[80px] font-[750] text-[#9A0002]">Dlihe Campus</h1>
      </div>

      <p className="text-[#FDB714] text-[25px] font-extralight w-[55%] ml-[10%]">
        Nestled in the outskirts of Bengaluru, the campus of over 45 acres
        enclosed in greenery provides students with a serene and conducive study
        environment that nurtures academic and personal growth of each student.
      </p>

      <div className="flex flex-col items-center mt-10">
        <h1 className=" text-[#FDB714] text-[40px]">
          Where Vvery Memories Created
        </h1>
        <div className=" h-0.5 w-[80%] bg-[#FDB714]"></div>

        <p className=" w-[80%] mt-5 text-[20px] font-light">
          Students enjoy plenty of free time in the afternoon and evening to
          work on research, projects and other interests. The in-campus
          residence means that faculty members are available throughout the day;
          therefore, students can approach their respective lecturers to seek
          further help beyond class hour. The campus offers Wi-Fi services in
          the hostel and catering centre.
        </p>
        <p className=" w-[80%] mt-5 text-[20px] font-light">
          The institute encourages student-initiated activities including sports
          and academic activities through student forum such as Student Council.
          It is also a hub to a number of extra-curricular activities headed by
          faculty members that the students can sign up for, semester-wise. The
          college team is active and has successfully performed in various
          football and basketball tournaments. The campus also houses a music
          room where students can practice their musical skills. The Library is
          the Central most building and true centre for many student activities.
        </p>

        <div className="flex flex-col items-center  mt-5">
          <img
            src={Sample}
            className=" w-[80%] h-[350px] rounded-2xl object-cover"
          />
          <p className=" p-2 text-gray-500 font-thin text-s -mr-[65%]">
            work hard, play hard ...
          </p>
          <div className="flex justify-center gap-5 ">
            <img
              src={Sample}
              className=" w-[26%] h-96 rounded-3xl object-cover"
            />
            <img
              src={Sample}
              className=" w-[26%] h-96 rounded-3xl object-cover"
            />
            <img
              src={Sample}
              className=" w-[26%] h-96 rounded-3xl object-cover"
            />
          </div>
          <p className="p-1 text-gray-500 font-thin text-s ">
            campus full of memories , activities, make new friends , continues
            to grow along the way...
          </p>

          <p className=" w-[80%] mt-5 font-light">
            At DLIHE, we value our roots by celebrating our culture and
            traditions. Observation of Lhakar and other important days on the
            Tibetan calendar are crucial to us. Introductory classes on Buddhism
            and meditation are held if personally requested to the concerned
            department. Free private tutorials on Chinese language in both
            beginner’s and intermediate levels are also periodically held.
          </p>
          <p className=" w-[80%] font-light">
            Students have the choice to work on campus so that they can earn, as
            they learn.
          </p>
          <p className=" w-[80%] font-light">
            The campus has a Wellness Centre which provides first-aid services,
            minor and urgent medical care.
          </p>
        </div>
      </div>

      <div>
        <div className=" flex items-center gap-5 ml-40 mt-10">
          <div className=" w-1 rounded-3xl h-12 bg-[#FDB714]" />
          <h1 className=" text-[40px] font-[750] text-[#FDB714]">
            DLIHE Values:
          </h1>
        </div>

        <ul className="flex flex-col list-disc  ml-[10%] mt-5 font-light">
          <li >Make yourselves feel at home in the institute</li>
          <li >Be accepting of each other and each other’s ideas</li>
          <li >No put downs; everyone is valuable</li>
          <li >Laugh together, not at each other</li>
          <li >Take risks in learning and question everything!</li>
          <li >Participation is key to learning</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Campus;
