import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const News = () => {
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
    fetch("/api/news")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div className=" flex justify-start  items-center gap-5 ml-[11.3rem] pt-52">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
        <h1 className=" text-[80px] font-[750] text-[#9A0002] uppercase">
          news and updates
        </h1>
      </div>
      <div className="card-main">
        <ul className="cards">
          {data.map((item) => (
            <li key={item._id} className="cards_item ">
              <Link to={`/news/${item._id}`}>
                {console.log(item)}
                <div className="main-card">
                  <div className="card_image">
                    <img src={item.image.url} alt="Card" />
                  </div>
                  <div className="card_content">
                    <p className="card_title text-yellow-400 text-xl">
                      {formatDate(item.createdAt)}
                    </p>
                    <p className="card_text ">{item.title}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default News;
