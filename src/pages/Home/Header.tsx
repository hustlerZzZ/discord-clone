import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import leftImage from "../../assets/left_bg_landing_header.svg";
import rightImage from "../../assets/right_bg_landing_header.svg";

function Header() {
  return (
    <div className="md:bg-cloud-image bg-blue-secondary bg-bottom flex lg:justify-center lg:items-center bg-cover lg:h-[550px] py-14 pb-[386px] md:py-28 overflow-hidden">
      <div className="text-white flex flex-col justify-start items-start lg:justify-center lg:items-center relative md:pl-16">
        <h2 className="font-Noto pl-10 text-2xl md:text-4xl lg:text-6xl lg:text-center font-extrabold mb-8 md:w-96 lg:w-full">
          IMAGINE A PLACE...
        </h2>
        <div className="lg:text-center px-10 text-md md:text-lg lg:text-xl md:w-[575px] lg:w-[900px]">
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="flex flex-col pl-10 lg:flex-row flex-grow gap-4 mt-10">
          <button className="bg-white py-2 px-3 justify-center lg:justify-start lg:py-4 flex items-center gap-2 lg:px-6 rounded-full font-semibold text-black-primary hover:text-blue-primary hover:shadow-2xl transition-all">
            <ArrowDownTrayIcon className="w-6" /> Download for Linux
          </button>
          <button className="bg-black-primary py-2 px-3 lg:px-6 font-semibold rounded-full lg:py-4">
            Open Discord in your browser
          </button>
        </div>
        <div className="flex">
          <img
            src={leftImage}
            alt="left-image"
            className="md:hidden absolute lg:block -bottom-[385px] lg:-bottom-[138px] -left-[70px] lg:-left-[550px] w-[700px]"
          />
          <img
            src={rightImage}
            alt="right-image"
            className="hidden md:block md:absolute md:-bottom-[138px] md:-right-80 lg:-right-[450px] w-[520px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
