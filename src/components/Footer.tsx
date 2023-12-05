import UsaFlagIcon from "../assets/usa_flag.png";
import Logo from "../assets/discord_main_logo.svg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-black-primary text-white">
      <div className="max-w-[1200px] mx-auto py-14 w-full">
        <div className="flex">
          <div className="flex flex-col gap-8 w-2/6">
            <div className="flex gap-2 cursor-pointer">
              <img src={UsaFlagIcon} alt="flag-icon" className="w-8" />
              <h4 className="text-sm flex gap-2 items-center">
                English, USA <IoIosArrowDown />
              </h4>
            </div>
            <div className="flex gap-4">
              <FaTwitter className="text-3xl cursor-pointer" />
              <FaInstagram className="text-3xl cursor-pointer" />
              <FaFacebook className="text-3xl cursor-pointer" />
              <FaYoutube className="text-3xl cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between w-4/6">
            <div className="flex flex-col gap-4">
              <h3 className="text-blue-primary">Product</h3>
              <ul className="flex flex-col gap-2 font-light">
                <li className="hover:underline">Download</li>
                <li className="hover:underline">Nitro</li>
                <li className="hover:underline">Status</li>
                <li className="hover:underline">App Directory</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-blue-primary">Company</h3>
              <ul className="flex flex-col gap-2 font-light">
                <li className="hover:underline">About</li>
                <li className="hover:underline">Jobs</li>
                <li className="hover:underline">Brand</li>
                <li className="hover:underline">Newsroom</li>
                <li className="hover:underline">Fall Release</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-blue-primary">Resources</h3>
              <ul className="flex flex-col gap-2 font-light">
                <li className="hover:underline">College</li>
                <li className="hover:underline">Support</li>
                <li className="hover:underline">Safety</li>
                <li className="hover:underline">Blog</li>
                <li className="hover:underline">Feedback</li>
                <li className="hover:underline">StreamKit</li>
                <li className="hover:underline">Creators</li>
                <li className="hover:underline">Community</li>
                <li className="hover:underline">Developers</li>
                <li className="hover:underline">Gaming</li>
                <li className="hover:underline">Official 3rd Party Merch</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-blue-primary">Policies</h3>
              <ul className="flex flex-col gap-2 font-light">
                <li className="hover:underline">Terms</li>
                <li className="hover:underline">Privacy</li>
                <li className="hover:underline">Cookie Settings</li>
                <li className="hover:underline">Guidelines</li>
                <li className="hover:underline">Acknowledgements</li>
                <li className="hover:underline">Licenses</li>
                <li className="hover:underline">Company Information</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-full bg-blue-secondary my-8"></div>
        <div className="flex justify-between">
          <img src={Logo} alt="logo-img" />
          <button className="px-3 py-2 bg-blue-secondary text-white rounded-full">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
