import { useState } from "react";
import Image1 from "../public/Capture.png";
import Image2 from "../public/Capture2.png";
import Image3 from "../public/Capture3.png";

import { FaMobileScreen } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdMailUnread } from "react-icons/io";

const images = [
  { src: Image1, alt: "Excellent", value: "Excellent" },
  { src: Image2, alt: "Good", value: "Good" },
  { src: Image3, alt: "Average", value: "Average" },
];

const Review = () => {
  const [selectedRating, setSelectedRating] = useState("");

  return (
    <div className="relative flex items-center flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg1 opacity-20"></div>
      
      {/* Main Content */}
      <div className="relative z-10 rounded-2xl w-[87%] my-3 md:w-[75%] lg:w-[35%] flex items-center flex-col justify-center md:mt-20 lg:mt-0">
        <div className="uppercase text-xl md:text-2xl pt-3 text-[#86655e]">
          Rate Your Museum Experience
        </div>

        <form action="https://formspree.io/f/movqeqpq" method="POST">
        <div className="flex items-center justify-center mt-5 md:mt-10 gap-5 md:gap-20 lg:mt-5">
  {images.map((image, index) => (
    <div key={index} className="flex flex-col items-center">
      <div
        onClick={() => setSelectedRating(image.value)}
        className={`cursor-pointer w-24 ${
          selectedRating === image.value ? "border-2 border-[#490d09] rounded-full" : ""
        }`}
      >
        <img src={image.src} alt={image.alt} />
      </div>
      <p className="text-xl font-semibold text-[#490d09] mt-2">{image.value}</p>
    </div>
  ))}
</div>


          <div className="w-full max-w-md space-y-6 mt-10 md:mt-14 lg:mt-10">
            <div className="flex items-center border-2 border-[#490d09] rounded-full py-2 px-4">
              <div className="bg-[#490d09] flex items-center justify-center p-2" style={{ borderRadius: "20px" }}>
                <CgProfile className="text-white text-xl" />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                className="ms-2 w-full outline-none placeholder-gray-500 text-gray-700 bg-transparent"
                required
              />
            </div>

            <input type="hidden" name="Ratings" value={selectedRating} />

            <div className="flex items-center border-2 border-[#490d09] rounded-full py-2 px-4">
              <div className="bg-[#490d09] flex items-center justify-center p-2" style={{ borderRadius: "20px" }}>
                <IoMdMailUnread className="text-white text-xl" />
              </div>
              <input
                type="email"
                name="Email"
                placeholder="Mail ID"
                className="ms-2 w-full outline-none placeholder-gray-500 text-gray-700 bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border-2 border-[#490d09] rounded-full py-2 px-4">
              <div className="bg-[#490d09] flex items-center justify-center p-2" style={{ borderRadius: "20px" }}>
                <FaMobileScreen className="text-white text-xl" />
              </div>
              <input
                type="tel"
                name="Mobile Number"
                placeholder="Mobile Number"
                className="ms-2 w-full outline-none placeholder-gray-500 text-gray-700 bg-transparent"
                required
              />
            </div>

            <div>
              <div className="relative flex items-center border-2 border-[#490d09] rounded-2xl py-1 px-4">
                <textarea
                  type="text"
                  className="ms-2 w-full outline-none placeholder-gray-500 text-gray-700 bg-transparent"
                  rows={3}
                  name="Description"
                  placeholder="Description Within 30 Characters"
                  required
                />
              </div>
            </div>

            <button className="relative w-full overflow-hidden bg-white border-2 border-[#490d09] text-[#490d09] font-semibold py-2 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-95">
              Submit
              <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear "></span>
            </button>

            <div className="pb-20 md:pb-60 lg:pb-18"></div>
            <div className="pb-2 md:pb-52 lg:pb-0"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
