import React from "react";
import sample from "../../assets/sample.jpg";
import pata from '../../assets/pata.png'

function Affiliation() {
  return (
    <div className=" pt-[167px]">
      <div className="flex flex-col gap-5">
        <img src={sample} className=" w-full h-[350px] object-cover" />

        <div className=" flex items-center gap-5 ml-40">
          <div className=" max-xl:invisible w-1 rounded-3xl h-16 bg-[#FDB714]" />
          <h1 className="heading text-[80px] font-[750] text-[#9A0002]">
            AFFILIATION
          </h1>
        </div>

        <p className="subheading text-[#FDB714] ml-36 font-light text-[19px] underline underline-offset-4 -mt-5 w-[1350px] text-center tracking-widest cursor-pointer">
          The Dalai Lama Institute for Higher Education, Bangalore, is TCV’s
          latest educational endeavor, and one of the most significant projects
          ever undertaken by TCV.
        </p>

        <div className=" parabox  w-[1300px] text-[24px] ml-44 font-light">
          <p className=" text-center font-extralight">
            “From the day we became refugees, our basic objective was to rise to
            the very place from where we have fallen down.”
          </p>

          <p className=" text-center text-[#9A0002] mb-10 font-extralight ">
            – H.H. the Dalai Lama
          </p>

          <p className=" text-center mb-10 font-medium">
            And that’s exactly what the affiliates do! They partner with
            Institutes and set them on a platform for the world to see. The
            Dalai Lama Institute for Higher Education is proud to be associated
            with the following well-wishers that have helped it reach the
            heights that it has:
          </p>

          <p className=" text-center mb-10 ">
            The Institute is a part of the{" "}
            <span className="text-[#9A0002]">
              Tibetan Children’s Village (TCV)
            </span>{" "}
            , an integrated charitable organization for child care and
            educational services. True to its initial vision, as set forth by
            His Holiness the Dalai Lama, the mission of TCV is to ensure that
            all Tibetan children under its care receive a sound modern education
            and a firm cultural identity, so they can become self-reliant and
            contributing members of the community and the world at large. Over
            the years, TCV has grown into the largest autonomous educational
            body in the Tibetan community in exile. In several significant ways,
            TCV has set the pace and tempo of school management, and has
            consistently worked hard to improve the quality and scope of
            education at the higher level. The Dalai Lama Institute for Higher
            Education, Bangalore, is TCV’s latest educational endeavour, and one
            of the most significant projects ever undertaken by TCV. We welcome
            your interest in the Dalai Lama Institute for Higher Education!
          </p>
        </div>

        <div className=" w-full h-[302px] bg-[#FDB71433] max-xl:mt-[750px]">

          <h1 className=" text-[40px] font-[750] text-center mt-10 text-[#9A0002]">BANGLORE UNIVERSITY</h1>

          <div className="flex items-center gap-4 ml-64 mt-5 max-xl:invisible">
            <div className=" h-2 border rounded bg-[#FDB714] w-[535px]" />
            <img src={pata} alt="" srcset="" className=" h-10 w-12 rotate-90" />
            <div className=" h-2 rounded border bg-[#FDB714] w-[535px] " />
          </div>

          <p className=" description max-xl:w-[90%] max-xl:-mt-5 max-xl:ml-8 text-center mb-10 font-light w-[1180px] ml-64 mt-5">
          Since 2018, DLIHE was recognized by and became an affiliated institute of Bangalore University. Under the auspices of Bangalore University, DLIHE began offering undergraduate programmes in Arts, Computer Applications, Commerce, and Business Administration, as well as Specialized Programmes (Tibetan Studies, as well as Tibetan Language, Literature, History and Buddhist Philosophy courses). The DLIHE also offers PhD in Tibetan Studies recognized by Bangalore University.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Affiliation;
