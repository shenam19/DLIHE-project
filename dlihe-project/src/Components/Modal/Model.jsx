import React, { useState } from "react";
import ShowModel from "./ShowModel";
import hisholiness from "../../assets/hisholiness.jpg";


const Model = () => {
  const [OpenModel, setOpenModel] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <img
        src={hisholiness}
        className=" h-[200px] w-[20%] fixed mt-40"
        onClick={() => {
          setOpenModel(true);
        }}
      />
      {OpenModel && <ShowModel CloseModel={setOpenModel} />}
    </div>
  );
};

export default Model;
