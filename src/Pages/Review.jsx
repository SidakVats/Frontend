import { useState } from "react";
import { Link } from "react-router-dom";
import Image1 from "../public/Capture.png";
import Image2 from "../public/Capture2.png";
import Image3 from "../public/Capture3.png";
import Image4 from "../public/img.png";

const images = [
  { src: Image1, alt: "Excellent", value: "Excellent" },
  { src: Image2, alt: "Good", value: "Good" },
  { src: Image3, alt: "Average", value: "Average" },
];

const Review = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedRating, setSelectedRating] = useState("");

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="rounded-2xl mt-3 w-[87%] lg:w-[26%] flex items-center flex-col justify-center shadow-xl">
        <div className="uppercase text-xl pt-3 text-[#86655e]">Rate the museum</div>

        <div className="flex flex-col items-center justify-center mt-5 gap-5">
          {images.map((image, index) => (
            <Link to={`/feedback?rating=${image.value}`} key={index} onClick={() => setSelectedRating(image.value)}>
              <img src={image.src} alt={image.alt} className="cursor-pointer" />
            </Link>
          ))}
        </div>

        <div>
          <img src={Image4} alt="image" className="rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Review;
