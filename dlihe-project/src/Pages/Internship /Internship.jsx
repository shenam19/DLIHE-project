import React from "react";

const Internship = () => {
  return (
    <div className=" pt-[200px]">
      <div className=" flex items-center gap-5 ml-40">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714] max-xl:invisible" />
        <h1 className="heading text-[80px] font-[750] text-[#9A0002]">
          volunteer and internship
        </h1>
      </div>

      <p className="subheading max-xl:text-base max-xl:mt-5 text-[#FDB714] text-[25px] text-center font-extralight w-[55%] ml-[10%]">
        “The best way to find yourself is to lose yourself in the service of
        others.” – Gandhi
      </p>

      <p className="parabox text-center ml-[12%] mt-10 text-[20px] w-[1260px] font-extralight max-xl:mt-[30px] max-xl:w-[80%]">
        The Dalai Lama Institute for Higher Education provides volunteer and
        internship opportunities for interested individuals as part of their
        personal and professional development. We welcome volunteers who can
        contribute to the Institute with special talents or professional skills
        on a mutual basis. The Institute will facilitate opportunity to learn
        Tibetan Language and Buddhist philosophy, and acquaint you with Tibetan
        culture. We also provide free accommodation and meals during the period
        of your service. Unfortunately, the Institute is not able to cover the
        cost of your travel to and from the campus.
      </p>

      <div className=" flex flex-col items-center mt-10 max-xl:mt-[300px]">
        <h1 className="heading max-xl:w-[80%] text-center w-[1260px] p-5 border-b border-[#FDB714] text-[#FDB714] text-[45px] font-semibold">
          How to Apply
        </h1>
        <p className="subheading max-xl:ml-5 mt-5 text-[17px] font-extralight">
          Interested applicants for volunteer and internship positions are
          requested to send their Curriculum Vitae (C.V.), full credentials, and
          area of contribution.
        </p>
      </div>

      <h3 className=" max-xl:text-xl max-xl:ml-[150px] text-gray-500 text-[30px] font-semibold relative ml-[40%] mt-10">
        Apply By Filling This Form
      </h3>

      <form action="" className=" flex flex-col items-center gap-10 mt-10">
        <input
          type="text"
          className=" input h-[80px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider"
          placeholder="your name ( required ) "
        />
        <input
          type="eamil"
          className=" input h-[80px] w-[754px] border rounded-2xl border-gray-400 p-10 font-thin tracking-wider"
          placeholder="your email ( required )"
        />
        <input
          type="text"
          className="input h-[80px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider"
          placeholder="your subject"
        />
      </form>

      <div className=" flex items-center gap-5 ml-[10%] mt-20">
        <h1 className="parabox max-xl:text-2xl max-xl:mb-[750px] max-xl:w-[60%] max-xl:text-center text-[40px] w-[18%] text-right font-semibold leading-10 text-[#FDB714]">
          what you wanted to teach
        </h1>
        <div className=" w-1 rounded-3xl h-28 bg-[#FDB714] max-xl:invisible" />

        <form action="" className=" text-[20px] max-xl:mt-5">
          <div className=" flex max-xl:-ml-2">
            <div className=" m-2 ">
              <input type="radio" className=" m-2 input" />
              <label htmlFor="">languages - tibetan,english/chinese</label>
            </div>

            <div className=" m-2">
              <input type="radio" className="m-2 input" />
              <label htmlFor="">environmental science</label>
            </div>
          </div>

          <div className=" flex max-xl:-ml-2">
            <div className=" m-2">
              <input type="radio" className=" m-2 input" />
              <label htmlFor="">computer application skills</label>
            </div>

            <div className=" m-2 ml-[14.2%]">
              <input type="radio" className=" m-2 input" />
              <label htmlFor="">sports and games</label>
            </div>
          </div>
        </form>
      </div>

      {/* below yellow line */}

      <div className=" w-[90%] h-0.5 bg-[#FDB714] mt-5 mx-auto"></div>
      <div className=" flex items-center gap-5 ml-[13%] mt-10">
        <h1 className=" parabox max-xl:text-2xl max-xl:mb-[600px] max-xl:w-[65%] max-xl:ml-12 max-xl:text-center text-[40px] w-[15%] text-right font-semibold leading-10 text-[#FDB714]">
          the serves you wanted to give
        </h1>
        <div className=" w-1 rounded-3xl h-28 bg-[#FDB714] max-xl:invisible" />

        <form action="" className=" text-[20px] ">
          <div className=" flex">
            <div className=" m-2 max-xl:-ml-2 max-xl:mt-10">
              <input type="radio" className=" m-2 input" />
              <label htmlFor="">languages - tibetan,english/chinese</label>
            </div>

            <div className=" m-2 ">
              <input type="radio" className=" m-2 input max-xl:mt-10" />
              <label htmlFor="">researcher</label>
            </div>
          </div>
        </form>
      </div>

      {/* lower input */}
      <div>
        <form action=" " className=" flex flex-col  mt-20">
          <div className="flex flex-col items-center">
            <label className=" text-[30px] text-gray-400 font-semibold">
              other areas
            </label>
            <input
              type="text"
              className=" input h-[80px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider"
            />
          </div>

          <div className="flex flex-col items-center mt-10">
            <label className=" text-[30px] text-gray-400 font-semibold">
              details and certifications
            </label>
            <p className=" text-gray-400 m-2">
              ( Give details of your skills and something about yourself )
            </p>
            <input
              type="text"
              className=" input h-[150px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider"
            />
          </div>

          <div className="flex flex-col items-center mt-10">
            <p className=" text-gray-400 m-2">
              Upload your Curriculum Vitae (CV), degrees, and any other
              certifications
            </p>

          </div>

          <div className="input flex flex-col items-center border-gray-500 mt-10 border w-[754px] h-[80px] mx-auto rounded-2xl">
            <input
              type="file"
              className="invisible"
              id="file"
            />
            <label for="file" className=" text-gray-400 text-3xl font-bold text-center max-xl:-mt-7" >Choose File</label>
          </div>

          <div className="input flex flex-col items-center border-gray-500 mt-10 border w-[754px] h-[80px] mx-auto rounded-2xl">
            <input
              type="file"
              className=" invisible"
              id="file"
            />
            <label for="file" className=" text-gray-400 text-3xl font-bold text-center max-xl:-mt-7" >Choose File</label>
          </div>

          <div className=" input flex flex-col items-center border-gray-500 mt-10 border w-[754px] h-[80px] mx-auto rounded-2xl">
            <input
              type="file"
              className="  invisible"
              id="file"
            />
            <label for="file" className=" text-gray-400 text-3xl font-bold text-center max-xl:-mt-7" >Choose File</label>
          </div>

          <div className="flex flex-col items-center mt-10">
            <p className="subheading text-gray-400 m-2 font-thin">
              Please type the code: To use CAPTCHA, you need Really Simple
              CAPTCHA plugin installed.
            </p>
            <input
              type="text"
              className=" input h-[80px] w-[754px] border  rounded-2xl border-gray-400 p-10 font-thin tracking-wider"
            />
            <p className=" text-gray-400 m-2 font-thin">
              (to show us you are human, not a spam program)
            </p>
          </div>

          <button className=" max-xl:w-[60%] max-xl:ml-32 h-[80px] w-[20%] bg-[#9A0002] rounded-3xl text-white ml-[40%] text-[30px] mt-10">
            apply for intership
          </button>
        </form>

        <div className="flex flex-col items-center gap-2 mt-10">
          <h1 className=" max-xl:w-[92%] max-xl:text-xl max-xl:mb-10 text-[30px] text-gray-500 font-medium text-center w-[50%]">
            Or you can send the above information and document photocopies by
            post to
          </h1>
          
          <p>Mr. Tenzin Namdol</p>
          <p>Outreach and Communication Officer</p>
          <p>The Dalai Lama Institute for Higher Education Sheshagrihalli</p>
          <p>Hejjala Post, Mysore Road Bengaluru</p>
          <p>K.A. 562109 INDIA</p>

          <div className=" mt-10 mr-5 text-center">
          <p>Email: communication-outreach@dalailamainstitute.edu.in,</p>
          <p>secretary@dalailamainstitute.edu.in</p>
          <p>Cell: +91-9611655599</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
