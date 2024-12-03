import { useState, useEffect } from "react";
import Image1 from "../public/Capture.png";
import Image2 from "../public/Capture2.png";
import Image3 from "../public/Capture3.png";

import { FaMobileScreen } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdMailUnread } from "react-icons/io";

// Your SpringModal component integrated here
// eslint-disable-next-line react/prop-types
const SpringModal = ({ isOpen, setIsOpen, isSubmitted }) => {
  if (!isOpen) return null;

  const closeModal = () => setIsOpen(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className=" mb-4">
          {isSubmitted ? (
            <div className="flex flex-col">
              <div className="flex items-center justify-center text-2xl font-medium">
                Thank You!
              </div>
              <div className="mt-2">
                We truly appreciate you taking the time to provide us with your
                feedback.
              </div>
            </div>
          ) : (
            "Form Submission Failed!"
          )}
        </h2>
        <div className="flex items-center justify-end">
          <button
            onClick={closeModal}
            className="bg-[#490d09] text-white py-[0.3rem] text-lg px-6 rounded-2xl hover:brightness-125 transition-all duration-200 "
          >
            {isSubmitted ? <>Close</> : "Try Again"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  const [selectedRating, setSelectedRating] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [isSubmitted, setIsSubmitted] = useState(false); // Form submission state

  const images = [
    { src: Image1, alt: "Excellent", value: "Excellent" },
    { src: Image2, alt: "Good", value: "Good" },
    { src: Image3, alt: "Average", value: "Average" },
  ];

  // Reset form fields when the page is loaded or refreshed
  useEffect(() => {
    setSelectedRating("");
    setName("");
    setEmail("");
    setMobile("");
    setDescription("");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if rating/image is selected
    if (!selectedRating) {
      alert("Please select a rating before submitting the form.");
      return; // Prevent form submission
    }
  
    // Simulate form submission logic
    setIsSubmitted(true);
    setIsOpen(true); // Open modal upon form submission
  
    // Optionally reset the form after submission
    setSelectedRating("");
    setName("");
    setEmail("");
    setMobile("");
    setDescription("");
  };
  

  return (
    <div className="relative flex items-center flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg1 h-[100vh] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 rounded-2xl w-[87%] my-3 md:w-[75%] lg:w-[35%] flex items-center flex-col justify-center md:mt-20 lg:mt-0">
        <div className="uppercase text-xl md:text-2xl pt-3 text-[#86655e]">
          Rate Your Museum Experience
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mt-5 md:mt-10 gap-5 md:gap-20 lg:mt-5">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  onClick={() => setSelectedRating(image.value)}
                  className={`cursor-pointer w-24 ${
                    selectedRating === image.value
                      ? "border-2 border-[#490d09] rounded-full"
                      : ""
                  }`}
                >
                  <img src={image.src} alt={image.alt} />
                </div>
                <p className="text-xl font-semibold text-[#490d09] mt-2">
                  {image.value}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full max-w-md space-y-6 mt-10 md:mt-14 lg:mt-10">
            <div className="flex items-center border-2 border-[#490d09] rounded-full py-2 px-4">
              <div
                className="bg-[#490d09] flex items-center justify-center p-2"
                style={{ borderRadius: "20px" }}
              >
                <CgProfile className="text-white text-xl" />
              </div>
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="ms-2 w-full outline-none placeholder-gray-500 text-gray-700 bg-transparent"
                required
              />
            </div>

            <input type="hidden" name="Ratings" value={selectedRating} />

            <div className="flex items-center border-2 border-[#490d09] rounded-full py-2 px-4">
              <div
                className="bg-[#490d09] flex items-center justify-center p-2"
                style={{ borderRadius: "20px" }}
              >
                <IoMdMailUnread className="text-white text-xl" />
              </div>
              <input
                type="email"
                name="Email"
                placeholder="Mail ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ms-2 w-full outline-none placeholder-gray-500 text-gray-700 bg-transparent"
                required
              />
            </div>

            <div className="flex items-center border-2 border-[#490d09] rounded-full py-2 px-4">
              <div
                className="bg-[#490d09] flex items-center justify-center p-2"
                style={{ borderRadius: "20px" }}
              >
                <FaMobileScreen className="text-white text-xl" />
              </div>
              <input
                type="tel"
                name="Mobile Number"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="relative w-full overflow-hidden bg-white border-2 border-[#490d09] text-[#490d09] font-semibold py-2 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-95">
              Submit
              <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear "></span>
            </button>
          </div>
        </form>
      </div>

      {/* Spring Modal Component */}
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isSubmitted={isSubmitted}
      />
    </div>
  );
};

export default Review;
