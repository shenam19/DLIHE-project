import React from "react";
import sample from "../../assets/sample.jpg";

function About() {
  return (
    <div className=" pt-[167px]">
      <div className=" box flex flex-col gap-5  ">
        <img src={sample} className=" h-[350px] w-full object-cover" />

        <div className="flex items-center gap-5 ml-40">
          <div className=" w-1 rounded-3xl h-16 bg-[#FDB714] max-xl:invisible" />
          <h1 className=" heading text-[80px] font-[750] text-[#9A0002]"><span className=" text-[#FDB714]">About </span>DLIHE</h1>
        </div>

        <p className=" subheading text-[#FDB714] ml-44 underline underline-offset-4 -mt-6 text[20px] font-light cursor-pointer">Dalai Lama Institute for Higher Education (DLIHE) is the first of its kind in the Tibetan community in India.</p>

        <div className=" parabox w-[1300px] text-[24px] ml-44 font-light">
          <p className="  text-center mb-10">Welcome to the Dalai Lama Institute for Higher Education (DLIHE), Bangalore! The Institute is the first of its kind in the Tibetan community in India and as well as the World. Please explore our website as we share an exciting vision for the future of education, and for the advancement of the young people of the Tibetan community in exile. After you have read about how the need for the Institute has arisen from our unique situation in India, as well as our vision for the future, we welcome your support, encouragement, and ideas for its further development!</p>

          <p className=" text-center mb-10">The Institute is a part of the <span className="text-[#9A0002]">Tibetan Children’s Village (TCV)</span> , an integrated charitable organization for child care and educational services. True to its initial vision, as set forth by His Holiness the Dalai Lama, the mission of TCV is to ensure that all Tibetan children under its care receive a sound modern education and a firm cultural identity, so they can become self-reliant and contributing members of the community and the world at large. Over the years, TCV has grown into the largest autonomous educational body in the Tibetan community in exile. In several significant ways, TCV has set the pace and tempo of school management, and has consistently worked hard to improve the quality and scope of education at the higher level. The Dalai Lama Institute for Higher Education, Bangalore, is TCV’s latest educational endeavour, and one of the most significant projects ever undertaken by TCV. We welcome your interest in the Dalai Lama Institute for Higher Education!</p>
        </div>

        <img src={sample} className="bottomimg w-[1300px] mx-auto h-[356px] object-cover" />

        <p className=" description text-gray-500 ml-44 text-center text[20px] font-light">His Holiness the Dalai Lama’s Visit & Inauguration – 14th December 2017.Photo by Tenzin Choejor/OHHDL</p>


      </div>
    </div>
  );
}

export default About;
