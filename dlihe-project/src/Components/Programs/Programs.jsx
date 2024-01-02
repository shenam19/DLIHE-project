import React from "react";

function Programs() {
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector(".card-image").style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector(".card-image").style.transform = "scale(1)";
  };

  return (
    <div className="p-32 py-16  text-center ">
      <div className="programtext-box w-2/3 m-auto ">
        <h1 className=" uppercase  text-5xl font-bold mb-1  tracking-wide">
          explore our programes
        </h1>
        <p>the best blend of traditional and modern education</p>
      </div>
      <h2 className="divider line one-line ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Endlessknot.svg/640px-Endlessknot.svg.png"
          alt="pata"
          className="w-10 rotate-90"
        />
      </h2>

      <div className="cards border-2 p-4 mt-12 rounded-[2rem] relative cursor-pointer overflow-hidden">
        <div className="relative">
          <img
            className="rounded-2xl overflow-hidden w-full h-[300px] object-cover"
            src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="text-container absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
            <span className="text-slide">
              Degree in Doctor of Philosophy (Ph.D.) in Tibetan studies.
            </span>
          </div>
        </div>
      </div>

      <div className="flex space-x-6 justify-between mt-10">
        <div
          className="card overflow-hidden transform transition-transform duration-1000 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl h-[370px] mb-8 ">
            <img
              className="rounded-2xl card-image "
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{
                height: "370px",
                width: "110%",
                objectFit: "cover",
                transition: "transform 0.5s ease-out",
              }}
            />
          </div>

          <p className=" m-auto capitalize">
            UG programs Under the university of bangalore
          </p>
        </div>

        <div
          className="card overflow-hidden transform transition-transform duration-1000 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl h-[370px] mb-8 ">
            <img
              className="rounded-2xl card-image "
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{
                height: "370px",
                width: "110%",
                objectFit: "cover",
                transition: "transform 0.5s ease-out",
              }}
            />
          </div>

          <p className=" m-auto capitalize">
            bachelor of computer application <br />( BCA )
          </p>
        </div>

        <div
          className="card overflow-hidden transform transition-transform duration-1000 cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-2xl h-[370px] mb-8 ">
            <img
              className="rounded-2xl card-image "
              src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{
                height: "370px",
                width: "110%",
                objectFit: "cover",
                transition: "transform 0.5s ease-out",
              }}
            />
          </div>

          <p className=" m-auto capitalize">
            bachelor of commerce <br /> ( B.com )
          </p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
