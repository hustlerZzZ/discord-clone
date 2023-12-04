import leftImage from "../../assets/left_bg_landing_header.svg";
import rightImage from "../../assets/right_bg_landing_header.svg";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

function Home() {
  return (
    <div className="bg-cloud-image bg-blue-secondary bg-bottom flex justify-center items-center bg-cover h-[550px] relative">
      <div className="text-white flex flex-col justify-center items-center">
        <h2 className="font-Noto text-6xl font-extrabold mb-8">
          IMAGINE A PLACE...
        </h2>
        <div className="text-center text-xl w-[900px]">
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
        </div>
        <div className="flex gap-4 mt-10">
          <button className="bg-white py-4 flex items-center gap-2 px-6 rounded-full font-semibold text-black-primary hover:text-blue-primary hover:shadow-2xl transition-all">
            <ArrowDownTrayIcon className="w-6" /> Download for Linux
          </button>
          <button className="bg-black-primary px-6 font-semibold rounded-full py-4">
            Open Discord in your browser
          </button>
        </div>
        <div>
          <img
            src={leftImage}
            alt="left-image"
            className="absolute bottom-0 -left-28 w-[700px]"
          />
          <img
            src={rightImage}
            alt="right-image"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
