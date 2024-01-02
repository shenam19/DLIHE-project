// import React from "react";
// import { RxArrowRight } from "react-icons/rx";
// import pata from "../../assets/pata.png";
// import upcoming1 from "../../assets/upcoming1.jpeg";
// import upcoming2 from "../../assets/upcoming2.jpg";
// import Sample from '../../assets/sample.jpg'
// import EventBar from "../../Compo/EventBar";


// function News() {
//   return (

//     <div className="">
//       {/* heading */}
//       <div className="Heading flex flex-col justify-center items-center">
//         <h1 className=" text-[50px] text-[#9A0002] font-[750]">DLIHE TODAY</h1>
//         <div className="flex items-center gap-4">
//           <div className=" h-1 border bg-[#FDB714] w-[535px]" />
//           <img src={pata} alt="" srcset="" className=" h-10 w-12 rotate-90" />
//           <div className=" h-1 border bg-[#FDB714] w-[535px] " />
//         </div>
//       </div>

//       {/* Upcoming News */}

//       <div className="shadow-2xl rounded-b-3xl w-[1350px] h-[1122px]  mx-auto my-20">
//         <div>
//           <div className=" flex-col gap-3">
//             <div className=" flex items-center ">
//               <div className=" border bg-[#FDB714] h-8 w-1 mx-2 ml-16" />
//               <h1 className=" text-[45px] text-[#9A0002] ">Upcoming events</h1>
//             </div>

//             <div className=" flex justify-center gap-10 mt-10 ">
//               {/* event1 */}
//               <div>
//                 <div>
//                   <div>
//                     <div class="overflow-hidden  bg-red-400 rounded-xl relative group w-[483px] h-[296px]">

//                       <div className="bg-[#FDB714] w-[77px] absolute rounded-b-lg ml-20 z-[100]">
//                         <div className=" mb-2">
//                           <h1 className=" text-[32px] font-bold text-center text-[#9A0002]">
//                             11
//                           </h1>
//                           <div className="flex items-center justify-center gap-1 text-[#9A0002] text-[13px] ">
//                             <p>Dec</p>
//                             <p>2023</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out  absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
//                         <div>
//                           <div class=" bg-black bg-opacity-50 p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-1000 ease-in-out">
//                             <div class="text-sm ">
//                               <span className=" text-[#FDB714]">
//                                 navigating the infinite horizon:
//                               </span>{" "}
//                               workshop on career in research and software
//                               engineering
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <img
//                         alt=""
//                         class="w-full aspect-square group-hover:scale-110 transition duration-1000 ease-in-out object-cover absolute"
//                         src={upcoming1}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* event2 */}
//               <div>
//                 <div>
//                   <div>
//                     <div class="overflow-hidden  aspect-video bg-red-400 rounded-xl relative group w-[483px] h-[296px]">

//                     <div className="bg-[#FDB714] w-[77px] absolute rounded-b-lg ml-20 z-[100]">
//                         <div className=" mb-2">
//                           <h1 className=" text-[32px] font-bold text-center text-[#9A0002]">
//                             11
//                           </h1>
//                           <div className="flex items-center justify-center gap-1 text-[#9A0002] text-[13px] ">
//                             <p>Dec</p>
//                             <p>2023</p>
//                           </div>
//                         </div>
//                       </div>

//                       <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                       
//                         <div>
//                           <div class="bg-black bg-opacity-50 p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-1000 ease-in-out">
//                             <div class="text-sm ">
//                               <span className=" text-[#FDB714]">
//                                 navigating the infinite horizon:
//                               </span>
//                               workshop on career in research and software
//                               engineering
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <img
//                         alt=""
//                         class="w-full aspect-square group-hover:scale-110 transition duration-1000 ease-in-out object-cover"
//                         src={upcoming2}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* New and update  */}

//           <div className=" flex items-center mt-10 ">
//             <div className=" border bg-[#FDB714] h-8 w-1 mx-2 ml-16" />
//             <h1 className=" text-[45px] text-[#9A0002] text-left ">
//               News & updates
//             </h1>
//           </div>

//           <div className="w-[1140px] h-[100%] mt-10 flex justify-center mx-auto gap-10">
           

//             <EventBar
//             imageSrc={Sample}
//             description={'one stage talent show in celebration of 34th anniversary nobel peace prize on 10th december 2023.'}
//             date={'13 dec at 2:30 pm'}
//              />

//             <EventBar
//             imageSrc={Sample}
//             description={'wokshop on bystender intervention against gender-based violence.'}
//             date={'3 dec at 5:30 pm'}
//              />

//             <EventBar
//             imageSrc={Sample}
//             description={'paper trading competation.'}
//             date={'11 dec at 12:50 pm'}
//              />
          
//           </div>

//         </div>
//         <p className="flex items-center justify-end text-[20px] text-[#FDB714] mt-10 mr-16 cursor-pointer">
//           visit for more news & events <RxArrowRight className=" text-xl" />{" "}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default News;


import React, { useEffect, useState } from "react";
import { RxArrowRight } from "react-icons/rx";
import pata from "../../assets/pata.png";
import upcoming1 from "../../assets/upcoming1.jpeg";
import upcoming2 from "../../assets/upcoming2.jpg";
import Sample from "../../assets/sample.jpg";
import EventBar from "../../Compo/EventBar";
import { Link } from "react-router-dom";

function News() {


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
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("/api/post")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("/api/post/event")
      .then((response) => response.json())
      .then((event) => setEvent(event.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="">
      {/* heading */}
      <div className="Heading flex flex-col justify-center items-center">
        <h1 className=" text-[50px] text-[#9A0002] font-[750]">DLIHE TODAY</h1>
        <div className="flex items-center gap-4">
          <div className=" h-1 border bg-[#FDB714] w-[535px]" />
          <img src={pata} alt="" srcset="" className=" h-10 w-12 rotate-90" />
          <div className=" h-1 border bg-[#FDB714] w-[535px] " />
        </div>
      </div>

      {/* Upcoming News */}

      <div className="shadow-2xl rounded-b-3xl w-[1350px] h-[1122px]  mx-auto my-20">
        <div>
          <div className=" flex-col gap-3">
            <div className=" flex items-center ">
              <div className=" border bg-[#FDB714] h-8 w-1 mx-2 ml-16" />
              <h1 className=" text-[45px] text-[#9A0002] ">Upcoming events</h1>
            </div>

            <div className=" flex justify-start gap-10 mt-10 ml-44 ">
              {/* event1 */}
              {event.map((a) => (
                <Link to={`/event/${a._id}`} key={a._id}>
                  <div>
                    <div>
                      <div>
                        <div class="overflow-hidden  bg-red-400 rounded-xl relative group w-[483px] h-[296px]">
                          <div className="bg-[#FDB714] w-[77px] absolute rounded-b-lg ml-20 z-[100]">
                            <div className=" mb-2">
                              <h1 className=" text-[32px] font-bold text-center text-[#9A0002]">
                                {new Date(a.createdAt).getDate()}
                              </h1>
                              <div className="flex items-center justify-center gap-1 text-[#9A0002] text-[13px] ">
                                <p>
                                  {new Date(a.createdAt).toLocaleString(
                                    "en-US",
                                    {
                                      month: "short",
                                    }
                                  )}
                                </p>
                                <p>{new Date(a.createdAt).getFullYear()}</p>
                              </div>
                            </div>
                          </div>

                          <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out  absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                            <div>
                              <div class=" bg-black bg-opacity-50 p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-1000 ease-in-out">
                                <div class="text-sm ">
                                  <span className=" text-[#FDB714]">
                                    {a.title}
                                    {/* navigating the infinite horizon: */}
                                  </span>{" "}
                                  {/* workshop on career in research and software
                                engineering */}
                                  {a.description}
                                </div>
                              </div>
                            </div>
                          </div>
                          <img
                            alt=""
                            class="w-full aspect-square group-hover:scale-110 transition duration-1000 ease-in-out object-cover absolute"
                            src={a.image.url}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* event2 */}
              {/* <div>
                <div>
                  <div>
                    <div class="overflow-hidden  aspect-video bg-red-400 rounded-xl relative group w-[483px] h-[296px]">
                      <div className="bg-[#FDB714] w-[77px] absolute rounded-b-lg ml-20 z-[100]">
                        <div className=" mb-2">
                          <h1 className=" text-[32px] font-bold text-center text-[#9A0002]">
                            11
                          </h1>
                          <div className="flex items-center justify-center gap-1 text-[#9A0002] text-[13px] ">
                            <p>Dec</p>
                            <p>2023</p>
                          </div>
                        </div>
                      </div>

                      <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                        <div>
                          <div class="bg-black bg-opacity-50 p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-1000 ease-in-out">
                            <div class="text-sm ">
                              <span className=" text-[#FDB714]">
                                navigating the infinite horizon:
                              </span>
                              workshop on career in research and software
                              engineering
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        alt=""
                        class="w-full aspect-square group-hover:scale-110 transition duration-1000 ease-in-out object-cover"
                        src={upcoming2}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* New and update  */}

          <div className=" flex items-center mt-10 ">
            <div className=" border bg-[#FDB714] h-8 w-1 mx-2 ml-16" />
            <h1 className=" text-[45px] text-[#9A0002] text-left ">
              News & updates
            </h1>
          </div>

          <div className="w-[1140px] h-[100%] mt-10 flex justify-center mx-auto gap-10">
            {data.map((item) => (
              <Link to={`/news/${item._id}`} key={item._id}>
                <EventBar
                  key={item.id}
                  imageSrc={item.image.url}
                  description={item.title}
                  date={formatDate(item.createdAt)}
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="flex items-center justify-end text-[20px] text-[#FDB714] mt-10 mr-16 cursor-pointer">
          visit for more news & events <RxArrowRight className=" text-xl" />{" "}
        </p>
      </div>
    </div>
  );
}

export default News;

