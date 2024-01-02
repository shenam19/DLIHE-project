import React from 'react'

const EventBar = ({ imageSrc, description, date }) => {
  return (
     <div className="w-[315px] h-[448px] border-2 rounded-[30px]">
    <div className="flex flex-col items-center gap-5 mt-5">
      <div className="overflow-hidden rounded-[20px]">
        <img
          src={imageSrc}
          className="w-[275px] h-[274px] rounded-[20px] hover:scale-110 transition duration-500 ease-in-out object-cover"
          alt="Event"
        />
      </div>
      <p className="w-[275px] text-center text-[16px]">{description}</p>
      <p className="text-[16px] absolute mt-[390px] text-gray-400 ">{date}</p>
    </div>
  </div>
  )
}

export default EventBar