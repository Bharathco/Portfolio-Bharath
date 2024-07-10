
import logo from "../assets/BR-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useState } from "react";
const NavBar = () => {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <img className="mx-2 w-10" src={logo} alt="" />
        </div>
       
        <div className="m-8 flex items-center justify-centergap-4 text-2xl gap-5">
        <a
          href="https://www.linkedin.com/in/bharath-rajashekar-69b2591a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        ><FaLinkedin/></a>

<a
          href="https://github.com/Bharathco"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-100 hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/bharath_raj_naik_/."
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-700"
        >
          <FaInstagram />
        </a>
            
        <a
             href="https://drive.google.com/file/d/16pi9Jc24GePOPX0okrAhQBzaqxTi-1EV/view?usp=sharing"
              download="Bharath_Rajashekar_Resume.pdf"
              target="_blank"
           className="relative text-green-500 hover:text-green-700"
              >
            <BiDownload />
               <span className="absolute text-gray-300 text-xs px-1 py-1 top-full left-1/2 transform -translate-x-1/2 -translate-y-0.5">
                  Resume
                    </span>
                </a>


        </div>
      </nav>
  );
}

export default NavBar
