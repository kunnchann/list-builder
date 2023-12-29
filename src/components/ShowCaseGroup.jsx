import React from "react";
const ShowCaseGroup = ({ input }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[26px] font-semibold">Your List</h1>
        <div className="bg-black py-1 px-5 rounded-full">
          <p className="text-[16px] text-white ">
            Done ( {input.filter((el) => el.isDone == true).length} /{" "}
            {input.length} )
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseGroup;
