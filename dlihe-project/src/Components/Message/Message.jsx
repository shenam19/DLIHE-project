import React from "react";
import hisholiness from "../../assets/hisholiness.jpg";

const Message = () => {
  return (
    <div className="mb-20">
      <div className=" border h-[720px] w-[full]">
        <img src={hisholiness} className=" object-cover h-[720px] w-full " />

        {/* black bar */}
        <div className=" h-[372px] w-[711.972px] bg-black bg-opacity-50 relative bottom-[720px] left-[950px] flex flex-col items-center justify-center">
          <h1 className=" text-[#FDB714] text-[36px] font-bold text-center w-[658.825px]">
            MESSAGE FROM HIS HOLINESS THE 14th DALAI LAMA
          </h1>
          <p className=" w-[659.828px] text-[20px] text-white text-center font-light">
            “The most important use of knowledge and education is to help us
            understand the importance of engaging in more wholesome actions and
            bringing about discipline within our minds.”
          </p>
        </div>

        {/* red bar */}
        <div className=" w-full h-[384px] bg-[#9A0002] relative bottom-[720px]">
          <div className="flex items-center justify-center gap-10 border-b-2 border-[#FDB714]">
            <h1 className=" text-[#FDB714] text-[128px] font-extrabold">MISSION</h1>
            <div className=" h-28 w-1 bg-[#FDB714]"></div>
            <p className=" text-[#FDB714] w-[659.828px] h-[72px] text-[20px] font-light mb-5">
              The mission of the Dalai Lama Institute for Higher Education is to
              ensure that each student is a passionate, life long learner who
              practices Tibetan values and serves the community with utmost
              dedication and integrity.
            </p>
          </div>

          <div className=" flex items-center justify-center gap-10 h-48">
            <ul className=" list-disc dark:text-white w-[645px] text-[20px] h-[134px] list-outside">
              <li className="">
                Students will excel in the academic standards and be competent
                in their respective field of studies.
              </li>
              <li>
                Students will acquire knowledge and skills to practice Tibetan
                culture.
              </li>
              <li>
                Students will recognize and pursue their passions by acquiring
                in-depth knowledge.
              </li>
            </ul>
            <div className=" h-36 w-1 bg-white"></div>
            <h1 className=" text-[80px] font-bold w-[486px] h-[137px] leading-none text-white text-center mb-5">STRATGIC OBJECTIVE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
