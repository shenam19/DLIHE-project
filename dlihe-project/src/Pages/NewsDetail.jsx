// NewsDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams(); // Use the useParams hook to get the id from the URL
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then((response) => response.json())
      .then((data) => setNewsDetail(data.data))
      .catch((error) => console.error("Error fetching news detail:", error));
  }, [id]); // Make sure to include id in the dependency array
  console.log(newsDetail);

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("/api/news")
      .then((response) => response.json())
      .then((datas) => setDatas(datas.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!newsDetail) {
    return <p>Loading...</p>; // You can show a loading spinner or message
  }

  const formattedDate = formatEventDate(new Date(newsDetail.createdAt));

  const formatDate = (dateString) => {
    const options = {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDateD = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );

    // Replace the comma with "At"
    const dateWithAt = formattedDateD.replace(",", " At");
    return dateWithAt;
  };

  return (
    <>
      <div className=" flex justify-start  items-center gap-5 ml-[11.3rem] pt-52">
        <div className=" w-1 rounded-3xl h-16 bg-[#FDB714]" />
        <h1 className=" text-[80px] font-[750] text-[#9A0002] uppercase">
          News
        </h1>
      </div>
      <div className="cards">
        <img
          src={newsDetail.image.url}
          alt=""
          className=" overflow-hidden w-3/4 ml-[11.5rem] h-[300px] object-cover mb-2"
        />
        <p className="text-center text-[#9A0002] text-2xl font-thin mb-8">
          Published On:{formattedDate}
        </p>
        <p className="ml-[11.5rem] w-3/4 ">{newsDetail.description}</p>
      </div>
      <h1 className="text-center text-[#FDb714] font-medium text-5xl mb-5 mt-20">
        News updates
      </h1>
      <hr className="bg-[#FDb714] h-[0.15rem] w-3/4 ml-[11.5rem] mb-5" />

      <div className="card-main">
        <ul className="cards">
          {datas.map((item) => (
            <li key={item._id} className="cards_item">
              <Link to={`/news/${item._id}`}>
                {console.log(item)}
                <div className="main-card">
                  <div className="card_image">
                    <img
                      src="https://picsum.photos/500/300/?image=10"
                      alt="Card"
                    />
                  </div>
                  <div className="card_content">
                    <p className="card_title text-yellow-400 text-xl">
                      {formatDate(item.createdAt)}
                    </p>
                    <p className="card_text">{item.title}</p>
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

// Function to format the date
const formatEventDate = (date) => {
  const options = { month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString(undefined, options);

  // Add the day suffix (e.g., "1st", "2nd", "3rd", "4th", etc.)
  const day = date.getDate();
  const daySuffix = getDaySuffix(day);

  return `${day}${daySuffix} ${formattedDate}`;
};

// Function to get the day suffix (st, nd, rd, or th)
const getDaySuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export default NewsDetail;
