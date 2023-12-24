import { useState } from "react";
import Logo from "../assets/discord_main_logo.svg";
import MobileNav from "./MobileNav";

function Navbar() {
    const [clicked, setClicked] = useState(true);

    return (
        <div className="text-white bg-blue-secondary pt-6 pb-4">
            <div className="max-w-[1200px] flex justify-between items-center mx-auto px-8">
                <div>
                    <img src={Logo} alt="logo" />
                </div>
                <div className="lg:flex hidden">
                    <ul className="flex gap-12 font-medium text-sm">
                        <li className="cursor-pointer hover:underline">
                            Download
                        </li>
                        <li className="cursor-pointer hover:underline">
                            Nitro
                        </li>
                        <li className="cursor-pointer hover:underline">
                            Safety
                        </li>
                        <li className="cursor-pointer hover:underline">
                            Support
                        </li>
                        <li className="cursor-pointer hover:underline">Blog</li>
                        <li className="cursor-pointer hover:underline">
                            Careers
                        </li>
                    </ul>
                </div>
                <div className="flex gap-8">
                    <div>
                        <button className="px-3 py-2 rounded-full bg-white text-black font-Inter text-sm hover:drop-shadow-2xl hover:text-blue-primary">
                            Login
                        </button>
                    </div>
                    <div className="lg:hidden flex flex-col justify-center gap-1 cursor-pointer">
                        {clicked ? (
                            <div
                                className="gap-1 flex flex-col justify-center transition-all"
                                onClick={() => setClicked((prev) => !prev)}
                            >
                                <div className="w-6 h-1 bg-white rounded-full"></div>
                                <div className="w-6 h-1 bg-white rounded-full"></div>
                                <div className="w-6 h-1 bg-white rounded-full"></div>
                            </div>
                        ) : (
                            <MobileNav setClicked={setClicked} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
