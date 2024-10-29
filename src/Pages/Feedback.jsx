import { useLocation } from "react-router-dom";
import Navbar1 from "../Components/Navbar";
import TextField from "@mui/material/TextField";
import Image1 from "../public/inner-banner.jpg";

const Feedback = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const rating = query.get("rating") || "";

  return (
    <>
      <Navbar1 />

      <section className="w-full relative flexCenter shadow-xl">
        <img
          src={Image1}
          alt="image"
          className="absolute h-full w-full top-0 bottom-0 object-cover z-[-10] brightness-90"
        />
        <div className="w-full h-max pt-60 pb-12 flex gap-y-3 flex-col justify-center m-auto lg:pt-64 lg:pb-20 px-5">
          <div className="text-black lg:ms-20">
            <h2 className="max-w-[777px] text-3xl lg:text-4xl text1 text-white pt-3">
              Feedback
            </h2>
            <div className="text-white text-xl mt-3">
              Home / <span className="text-[#bdbbb9]">Feedback</span>
            </div>
          </div>
        </div>
      </section>

      <div className="my-10 p-5">
        <form
          action="https://formspree.io/f/xjkvgddq"
          method="POST"
          className="shadow-2xl rounded-2xl"
        >
          <p className="text-base pt-5 px-10">
            Complete the below form to send us your valuable Feedback. Your
            feedback will be very much appreciated. If you provide us with your
            contact information, we will be able to answer your questions.
          </p>
          <div className="px-10 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              required
              name="Name :"
            />
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
              size="small"
              required
              name="Email :"
            />
          </div>

          <div className="px-10 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <TextField
              id="outlined-basic"
              label="Contact Number"
              variant="outlined"
              size="small"
              required
              name="Contact Number :"
            />
            <TextField
              id="outlined-basic"
              label="Your Review"
              defaultValue={rating}
              variant="outlined"
              size="small"
              required
              name="Ratings :"
            />
          </div>

          <div className="px-10 mt-5 grid grid-cols gap-5">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              size="small"
              required
              name="Description :"
            />
          </div>

          <div className="px-10 pb-10 mt-5 grid grid-cols gap-5">
            <button
              type="submit"
              className="relative overflow-hidden bg-[#f4f0ea] border-2 border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-500 ease-linear focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 active:scale-95"
            >
              Submit
              <span className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-100 ease-linear"></span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Feedback;
