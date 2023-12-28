import { IoPersonAddSharp } from "react-icons/io5";
import { GiPsychicWaves } from "react-icons/gi";
import { IoLogoIonitron } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

function SearchBar() {
    return (
        <div className="bg-black-secondary basis-2/12 p-4">
            <div>
                <input
                    type="text"
                    placeholder="Find or start conversation"
                    className="w-full py-1 px-2 bg-black-primary text-white focus:outline-none"
                />
            </div>
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center bg-black-tertiary text-white gap-2 rounded-md hover:bg-black-tertiary p-3 cursor-pointer">
                    <IoPersonAddSharp className="text-white text-2xl" />
                    <h2>Friends</h2>
                </div>
                <div className="flex items-center text-white gap-2 hover:bg-black-tertiary rounded-md p-3 cursor-pointer">
                    <GiPsychicWaves className="text-white text-2xl" />
                    <h2>Stage Discovery</h2>
                </div>
                <div className="flex items-center text-white gap-2 hover:bg-black-tertiary rounded-md p-3 cursor-pointer">
                    <IoLogoIonitron className="text-white text-2xl" />
                    <h2>Nitro</h2>
                </div>
            </div>
            <div>
                <div className="text-white flex justify-between items-center mt-4">
                    <h2>Direct Message</h2>
                    <FaPlus className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
