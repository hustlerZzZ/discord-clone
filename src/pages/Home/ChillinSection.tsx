import JustChillinImage from "../../assets/just_chiling_landing.svg";
import TinyImage from "../../assets/tiny_stars_landing.svg";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
function ChillinSection() {
  return (
    <div className="bg-light-gray py-28">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center text-center px-36">
          <h2 className="font-extrabold text-5xl text-black-secondary">
            RELIABLE TECH FOR STAYING CLOSE
          </h2>
          <p className="text-xl font-light">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
        </div>
        <div>
          <img src={JustChillinImage} alt="just-chillin-image" />
        </div>
        <div className="flex flex-col gap-8 justify-center items-center mt-20 relative">
          <img
            src={TinyImage}
            alt="tiny-image"
            className="absolute w-[550px] -top-10"
          />
          <h3 className="text-3xl font-bold">Ready to start your journey?</h3>
          <button className="flex gap-2 bg-blue-primary font-medium text-white py-4 px-8 rounded-full">
            <ArrowDownTrayIcon className="w-6" />
            Download for Linux
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChillinSection;
