import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Announcement = () => {
  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );

    // Replace the comma with "At"
    const dateWithAt = formattedDate.replace(",", " At");
    return dateWithAt;
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/announcements")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(data);
  return (
    <>
      <div className=" flex justify-start  items-center gap-5 ml-[11.3rem] pt-52">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
        <h1 className=" text-[80px] font-[750] text-[#9A0002] capitalize">
          Announcements
        </h1>
      </div>
      <div className="cards">
        <ul className="w-3/4 ml-[11.3rem]">
          {data.map((item) => (
            <div className="flex   rounded-2xl  mb-8  shadow-lg">
              <img
                src={item.image.url}
                alt="Card"
                className="w-1/3 rounded-tl-2xl rounded-bl-2xl w-[250px] h-[220px] object-cover"
              />

              {/* Text on the right */}
              <div className="flex flex-col justify-center p-8 w-2/3 bg-white rounded-tr-2xl rounded-br-2xl">
                <h2 className="text-xl  text-start font-bold text-gray-800 mb-4">
                  <span className="text-[#FDB714]">Announcements,Event</span>{" "}
                  {formatDate(item.createdAt)}
                </h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Announcement;
