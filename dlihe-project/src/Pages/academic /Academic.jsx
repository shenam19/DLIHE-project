import React from "react";

const Academic = () => {
  return (
    <div className=" pt-[200px]">
      <div className=" flex items-center gap-5 ml-40">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714] max-xl:invisible" />
        <h1 className=" heading text-[80px] font-[750] text-[#9A0002]">
          ACADEMIC PROGRAMS
        </h1>
      </div>

      <p className="subheading max-xl:mt-5 text-[#FDB714] text-[25px] text-center font-extralight w-[55%] ml-[10%]">
        The teacher is given the necessary space and authority to function in
        the Institute as a key figure in the teaching-learning process
      </p>
      <div>
        <p className=" parabox max-xl:mt-10 text-center ml-[10%] mt-10 text-[20px] w-[65%] font-extralight">
          The Dalai Lama Institute for Higher Education (DLIHE) is an
          undertaking of the Tibetan Children’s Village (TCV) with its Head
          Office in Dharamsala, H.P. India. TCV is the oldest and the largest
          charitable educational organization for Tibetans, established in 1960,
          by His Holiness the Dalai Lama to cater to the welfare and education
          of orphaned and destitute Tibetan refugee children in India.
        </p>
        <p className=" parabox  max-xl:mt-60 text-center ml-[10%] mt-10 text-[20px] w-[65%] font-extralight">
          The DLIHE was inaugurated in 2008 with the aim of facilitating
          learning in both traditional and modern disciplines. Students
          graduating from schools around India would be able to pursue modern
          subjects of their choice, but also strengthen their proficiency in the
          Tibetan language, as well as increase their awareness of Tibetan
          culture.
        </p>

        <p className=" parabox max-xl:mt-[43no0px] text-center ml-[10%] mt-10 text-[20px] w-[65%] font-extralight">
          Since 2018, DLIHE was recognized by and became an affiliated institute
          of Bangalore University. Under the auspices of Bangalore University,
          DLIHE began offering undergraduate programmes in Arts, Computer
          Applications, Commerce, and Business Administration, as well as
          Specialized Programmes (Tibetan Studies, as well as Tibetan Language,
          Literature, History and Buddhist Philosophy courses). The DLIHE also
          offers PhD in Tibetan Studies recognized by Bangalore University.
        </p>
      </div>
    </div>
  );
};

export default Academic;
