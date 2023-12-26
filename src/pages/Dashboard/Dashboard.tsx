import Logo from "../../assets/discord_logo.svg";
import ServerLogo from "../../assets/new_line.png";
import Plus from "../../assets/plus.svg";
import ServerCards from "./ServerCards.js";

function Dashboard() {
    return (
        <div className="flex">
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
                    <div className="p-2 bg-black-tertiary rounded-full">
                        <img src={Plus} alt="" className="w-8" />
                    </div>
                </ServerCards>
            </div>
            <div className="bg-black-secondary basis-4/12"></div>
            <div className="bg-black-tertiary grow"></div>
        </div>
    );
}

export default Dashboard;
