import React from "react";
import { RxOpenInNewWindow } from "react-icons/rx";
import udemy from "../assets/udemy.webp";

const Certificate = ({ certificateRef }) => {
  return (
    <div>
      <div className="flex justify-center">
        <h2>Certificate</h2>
      </div>
      <div className="shadow-lg rounded-lg hover:scale-110 transition-all ease-in-out duration-300 mx-auto">
        <img
          src={udemy}
          alt=""
          className="h-24  md:h-32  object-fill mx-auto "
        />

        <a
          href="https://www.udemy.com/certificate/UC-28b1dbb5-0f8a-4133-abe1-f31dd92cfdf5/"
          className="flex justify-center"
        >
          <button className="text-[#1e375a] hover:bg-gray-300  font-semibold transition-all flex gap-2 justify-center items-center p-2 rounded-lg border-2 border-gray-400">
            Show credential
            <RxOpenInNewWindow />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Certificate;
