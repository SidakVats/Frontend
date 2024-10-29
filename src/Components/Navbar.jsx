import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../public/facebook2.svg";
import Image2 from "../public/instagram2.svg";
import Image5 from "../public/home.png";

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};

const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition },
  exit: { height: 0, transition },
};

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
};

const blur = {
  initial: { filter: "blur(0px)", opacity: 1 },
  open: { filter: "blur(4px)", opacity: 0.6, transition: { duration: 0.3 } },
  closed: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.3 } },
};

const translate = {
  initial: { y: "100%", opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

const links = [
  { title: "Home", href: "/" },
  { title: "Review", href: "/review"},
  { title: "About", href: "/about"},
  { title: "Contact", href: "/contact" },
];

function Nav() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={"nav overflow-hidden"}
    >
      <div
        className={
          "wrapper flex flex-col gap-[50px] mb-[80px] md:flex-row md:justify-between md:mb-0"
        }
      >
        <div className={"container flex flex-col justify-between"}>
          <div
            className={
              "lg:gap-2 flex flex-wrap mt-[40px] md:mt-[80px] max-w-[1200px]"
            }
          >
            {links.map((link, index) => (
              <Link
                key={`l_${index}`}
                to={link.href}
                className="text-black no-underline uppercase"
              >
                <motion.p
                  onMouseOver={() => setSelectedLink({ isActive: true, index })}
                  onMouseLeave={() =>
                    setSelectedLink({ isActive: false, index })
                  }
                  variants={blur}
                  animate={
                    selectedLink.isActive && selectedLink.index !== index
                      ? "open"
                      : "closed"
                  }
                  className="text-[32px] md:text-[5vw] font-light overflow-hidden pr-[30px] pt-[10px] md:pr-[2vw]"
                >
                  {getChars(link.title)}
                </motion.p>
              </Link>
            ))}
          </div>

          {/* <footer
            className={
              "grid grid-cols-2 md:flex md:flex-wrap items-end mt-[40px] text-[12px] uppercase justify-between"
            }
          >
            <ul className="w-full md:w-auto flex flex-col gap-[10px] mt-[10px] list-none p-0">
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span className="text-[#9f9689]">Made by:</span>{" "}
                <a
                  href="https://www.sidakvats.in/"
                  target="_blank"
                  className="text-white no-underline"
                >
                  Sidak Vats
                </a>
              </motion.li>
            </ul>
            <ul className="w-full md:w-auto flex flex-col gap-[10px] mt-[10px] list-none p-0">
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span className="text-[#9f9689]">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/sidak-vats-999375306/"
                  target="_blank"
                  className="text-white no-underline"
                >
                  Sidak Vats
                </a>
              </motion.li>
            </ul>
            <ul className="w-full md:w-auto flex flex-col gap-[10px] mt-[10px] list-none p-0">
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <span className="text-[#9f9689]">Github:</span>{" "}
                <a
                  href="https://github.com/SidakVats?tab=repositories"
                  target="_blank"
                  className="text-white no-underline"
                >
                  Sidak Vats
                </a>
              </motion.li>
            </ul>
            <ul className="w-full md:w-auto flex flex-col gap-[2px] mt-[15px] list-none p-0">
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Privacy Policy
              </motion.li>
              <motion.li
                custom={[0.3, 0]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                Terms & Conditions
              </motion.li>
            </ul>
          </footer> */}
        </div>

        <motion.div
          variants={opacity}
          initial="initial"
          animate={selectedLink.isActive ? "open" : "closed"}
          className={
            "imageContainer hidden md:block w-[500px] h-[450px] relative"
          }
        >
          <img
            src={Image5}
            // fill={true}
            alt={links[selectedLink.index].title}
            className="object-cover mt-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Navbar1() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" bg-[#f4f0ea] fixed w-[100%] box-border p-[10px] md:p-[20px] top-0 z-50">
      <div className=" flex items-center justify-between p-5 md:p-2 uppercase text-[12px] relative font-[400] md:text-[15px]">
        {/* Sidak Vats (always on the left) */}
        {/* <Link href="/" className="text-black no-underline absolute left-0">
          Sidak Vats
        </Link> */}

        <section className="flex items-center p-4 pe-16 pt-3 pb-3 absolute left-0">
          <Link
            to="/"
            className="text-2xl font-mono flex items-center md:gap-1"
          >
            SIDAK VATS
          </Link>
        </section>

        {/* Hamburger Menu (right side on small devices, centered on larger devices) */}
        <div
          onClick={() => setIsActive(!isActive)}
          className={` flex items-center justify-center gap-[8px] cursor-pointer absolute right-0 md:relative md:left-1/2 md:transform md:-translate-x-1/2`}
        >
          <div
            className={`relative w-[18px] h-[2px] pointer-events-none transition-transform duration-[1s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] `}
          >
            {/* Pseudo-elements for the lines */}
            <div
              className={`absolute w-full h-[1px] bg-black transition-transform duration-[1s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] ${
                isActive ? "rotate-45 top-[0.5px]" : "top-[4px]"
              }`}
            ></div>
            <div
              className={`absolute w-full h-[1px] bg-black transition-transform duration-[1s] ease-[cubic-bezier(0.76, 0, 0.24, 1)] ${
                isActive ? "-rotate-45 top-[0.5px]" : "-top-[4px]"
              }`}
            ></div>
          </div>
          <div className="relative flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className="relative"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? "open" : "closed"}
              className="absolute opacity-0"
            >
              Close
            </motion.p>
          </div>
        </div>

        {/* Shop and Cart (hidden on mobile and tablets, visible on larger devices) */}
        <motion.div
          variants={opacity}
        //   animate={!isActive ? "open" : "closed"}
          className="hidden md:flex gap-[20px] lg:absolute lg:right-0"
        >
          <p className="cursor-pointer">Follow Us</p>
          <div className="flex items-center justify-center gap-[8px] cursor-pointer">
          <Link to={"#"} >
          <img src={Image1} alt="facebook svg" width={24} />
          </Link>
          <Link to={"#"}>
          <img src={Image2} alt="instagram svg" width={24} />
          </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={
          "background bg-black/50 h-[100%] w-[100%] absolute left-0 top-[100%]"
        }
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}