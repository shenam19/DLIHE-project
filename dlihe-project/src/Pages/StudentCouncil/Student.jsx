import React from "react";

const Student = () => {
  return (
    <div className="pt-[15%]">
      <div className=" flex items-center gap-5 ml-40">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
        <h1 className=" text-[80px] font-[750] text-[#9A0002]">
          Student Council
        </h1>
      </div>

      <p className="text-[#FDB714] text-[25px] font-extralight w-[55%] ml-[10%]">
        This is the apex Student Executive Body and form an important bridge
        between the student body and the Institute administration.
      </p>

      <p className=" w-[80%] mt-5 text-[20px] font-light ml-[10%]">
        The Student Council is the formal student elected leadership that
        represent the student body. It forms the bridge between the student body
        and the administration. It organizes all student related off class
        programs on campus. It function through various committees that the
        student council recognizes such as cultural activities, debates, quiz
        competitions, seminars and games and sports programs to identify and
        nurture talents and provide a platform for members to develop leadership
        skills The General Student Body annually elect the President. Other
        Cabinet members are selected by the President to assist him/her. This is
        the apex Student Executive Body and form an important bridge between the
        student body and the Institute administration.
      </p>

      <div className="flex flex-col items-center mt-10">
        <h1 className=" text-[#FDB714] text-[40px]">Responsibilities</h1>
        <div className=" h-0.5 w-[80%] bg-[#FDB714]"></div>
      </div>

      <ul className="list-disc ml-[10%] mt-5 leading-7 w-[70%] flex flex-col">
        <li>
          Meet monthly to discuss various issues concerning the institution and
          forward suggestions to the Principal.
        </li>
        <li>
          Improve the management and activities of the institution through the
          Council.
        </li>
        <li>
          Develop leadership qualities in the concerned members in the process
          of shouldering their responsibilities.
        </li>
        <li>
          Ensure that the students uphold the student’s code of ethics and rules
          of discipline.
        </li>
        <li>
          Assist the Management in bringing about a healthy atmosphere and ethos
          in the campus.
        </li>
        <li>
          Initiate educational activities and programs in the institution with
          approval from the concerned Head.
        </li>
        <li>
          Maintain minutes of the meetings and submit a semester report to the
          Principal.
        </li>
      </ul>
    </div>
  );
};

export default Student;
