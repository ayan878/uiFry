import { BsArrowRight } from "react-icons/bs";
import { IoPlayCircleOutline } from "react-icons/io5";
import strip from "../assets/strip.png";
import iphone13Front from "../assets/iPhone-13-Pro-Front.png";
import iphone13Front1 from "../assets/iPhone-13-Pro-Front-1.png";
import iphone13Front2 from "../assets/iPhone-13-Pro-Front-2.png";
import spiral from "../assets/spiral1.png";
import redSpot from "../assets/Group 35931.png";
import iphoneSpot from "../assets/Group 35899.png";


function Hero() {
  return (
    <div className="flex grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold capitalize tracking-tighter mt-8">
          make the best financial decisions
        </h1>
        <img
          src={redSpot}
          alt="Iphone13"
          className="absolute top-[-44px] left-30 z-[-10]"
        />
        <p className="font-extrathin text-zinc-400">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="flex gap-4">
          <button className="bg-black text-white font-extralight p-2 rounded-md flex items-center gap-2">
            Get Started <BsArrowRight />
          </button>
          <button className="text-black font-extralight px-2 rounded-md flex items-center gap-2">
            <IoPlayCircleOutline className="w-8 h-8" /> Watch Video
          </button>
        </div>
        <div className="relative bottom-10 md:bottom-20">
          <img src={strip} alt="strip" />
        </div>
      </div>
      <div className="hidden md:block relative w-full top-[-24px]">
        <img
          src={spiral}
          alt="IphoneSpiral"
          className="absolute bottom-16  right-10 z-10"
        />
        <img
          src={iphoneSpot}
          alt="IphoneSpot"
          className="absolute bottom-2 right-12"
        />
        <img
          src={iphone13Front}
          alt="Iphone13"
          className="absolute top-0 left-8 z-30 w-68 h-96"
        />
        <img
          src={iphone13Front1}
          alt="Iphone13"
          className="absolute top-16 left-28 z-20 w-68 h-96"
        />
        <img
          src={iphone13Front2}
          alt="Iphone13"
          className="absolute top-28 left-48 z-10 w-68 h-96"
        />
      </div>

    </div>
  );
}

export default Hero;
