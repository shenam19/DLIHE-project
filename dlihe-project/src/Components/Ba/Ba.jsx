import React from 'react'

const Ba = () => {
  return (
    <div>
     <div className=" flex items-center gap-5 ml-40">
          <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
          <h1 className=" text-[80px] font-[750] text-[#9A0002]">BACHELOR OF ARTS</h1>
      </div>
      <p className=' text-gray-500 tracking-widest font-light text-[25px] ml-[11%]'>The Bachelor of Arts (BA) degree has an emphasis in three different optional subject combinations.</p>

      <h1 className=" text-[40px] font-medium text-[#FDB714] w-[60%] text-center ml-[20%] mt-[5%] border-b-2 p-5 border-[#FDB714] ">Bachelor of Arts (BA) Under the Statue of “Outreach” Programmes – UoM</h1>

      <div className='flex flex-col ml-[20%] mt-[2%]'>
          <h1 className=' text-[30px] text-gray-500 font-semibold relative '>introduction</h1>
          <p className=' text-[20px] font-light'>The Bachelor of Arts (BA) degree has an emphasis in three different optional subject combinations:</p>
          <ol className=' list-decimal ml-[2%] mt-[2%] leading-7'>
               <li>Economics, History and Political Science (e.h.p.)</li>
               <li>Economics, Political Science, and Geography (e.p.g.)</li>
               <li>History, English, and Psychology (h.e.Psy)</li>
               <li>English, Political Science and Geography (e.p.g.)</li>
               <li>Public Admin, Journalism and Optional English ( P.J.E)</li>
          </ol>
      </div>

      <div className='flex flex-col ml-[25%] mt-[2%]'>
          <h1 className=' text-[30px] text-gray-500 font-semibold relative '>semester system</h1>
          <ul className=' list-disc ml-[2%] mt-[2%] leading-7 w-[70%] '>
               <li>In First Semester there shall be 6 Papers, viz., 2 Languages (Tibetan, English), Constitution of India, and 3 optional subjects</li>
               <li>n Second Semester there shall be 6 Papers, viz., 2 Languages (Tibetan, English), Environmental Studies, and 3 optional subjects.</li>
               <li>In Third Semester there shall be 6 Papers, viz., 2 Languages (Tibetan, English), 3 optional subjects, and ‘Secular Ethics’ Course</li>
               <li>In Fourth Semester there shall be 6 Papers, viz., 2 Languages (Tibetan, English), Computer Science, 3 optional subjects.</li>
               <li>In Fifth and Sixth Semester there shall be 3 optionals, each optional having 3 papers</li>
          </ul>
      </div>
      <div className='flex flex-col ml-[20%] mt-[2%]'>
          <h1 className=' text-[30px] text-gray-500 font-semibold relative '>subjects</h1>
          <ul className=' list-disc ml-[2%] mt-[2%] leading-7 w-[70%] '>
               <li>History</li>
               <li>Economics</li>
               <li>Geography</li>
               <li>Psychology</li>
               <li>English</li>
               <li>Political Science</li>
               <li>Public Admin</li>
               <li>ournalism</li>
               <li>Optional English</li>
             
          </ul>
      </div>

    </div>
  )
}

export default Ba