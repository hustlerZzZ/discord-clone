import Logo from "../../assets/discord_logo.svg";
import ServerLogo from "../../assets/new_line.png";
import Plus from "../../assets/plus.svg";
import ServerCards from "./ServerCards.js";
import { FaCompass } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function SideBar() {
    return (
        <div className="bg-black-primary basis-20 flex flex-col h-screen items-center">
            <div className="mt-4">
                <img
                    src={Logo}
                    alt="logo"
                    className=" bg-blue-primary rounded-2xl"
                />
            </div>
            <ServerCards>
                <img src={ServerLogo} alt="" className="w-14 rounded-lg" />
            </ServerCards>
            <ServerCards>
                <div className="p-2 bg-black-tertiary rounded-full">
                    <img src={Plus} alt="" className="w-8" />
                </div>
            </ServerCards>
            <ServerCards>
                <div className="p-3.5 bg-black-tertiary rounded-full">
                    <FaCompass className="text-2xl text-green-500" />
                </div>
            </ServerCards>
            <ServerCards>
                <div className="p-2 bg-black-tertiary rounded-full">
                    <MdOutlineFileDownload className="text-4xl text-green-500" />
                </div>
            </ServerCards>
        </div>
    );
}

export default SideBar;
