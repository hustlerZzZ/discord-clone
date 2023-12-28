import { useState } from "react";
import NoOnlineFriends from "../../assets/no_online_friends.svg";
import NoFriend from "../../assets/pending_users_icon.svg";
import { IoPersonAddSharp } from "react-icons/io5";

function ContentBox() {
    const [addFriend, setAddFriend] = useState(false);

    return (
        <div className="bg-black-tertiary grow flex flex-col">
            <div className="p-4 border-b border-black-primary h-[6%]">
                <ul className="flex gap-8 text-white">
                    <li className="flex justify-center items-center gap-2 font-bold">
                        <IoPersonAddSharp className="text-white text-xl" />
                        Friends
                    </li>
                    <li className="font-semibold hover:bg-black-secondary py-0.5 px-2 rounded-md  cursor-pointer">
                        Online
                    </li>
                    <li className="hover:bg-black-secondary py-0.5 px-2 rounded-md cursor-pointer">
                        All
                    </li>
                    <li className="hover:bg-black-secondary py-0.5 px-2 rounded-md cursor-pointer">
                        Pending
                    </li>
                    <li className="hover:bg-black-secondary py-0.5 px-2 rounded-md cursor-pointer">
                        Blocked
                    </li>
                    <button
                        className={`${
                            addFriend
                                ? "bg-green-600 text-white"
                                : "text-green-600"
                        } py-0.5 px-2 text-sm rounded-md cursor-pointer`}
                        onClick={() => setAddFriend((curr) => !curr)}
                    >
                        Add Friend
                    </button>
                </ul>
            </div>
            <div className="w-full h-[94%] flex">
                <div className="w-4/6 grow">
                    {addFriend ? (
                        <div className="h-full p-8">
                            <h2 className="uppercase font-semibold text-xl text-white">
                                Add Friend
                            </h2>
                            <div className="text-white mt-2 flex flex-col gap-4">
                                <p className="text-sm">
                                    You can add a friend with their Discord tag.
                                    It's cAsE sEnSiTiVe!
                                </p>
                                <input
                                    type="text"
                                    placeholder="Enter a Username#0000"
                                    className="bg-black-secondary py-3 px-4 rounded-lg outline-black-primary outline focus:outline-black-primary focus:outline focus:outline-1 outline-1"
                                />
                            </div>
                            <div className="h-4/6 flex flex-col justify-center items-center">
                                <img
                                    src={NoFriend}
                                    alt="adding-friend"
                                    className="w-1/2"
                                />
                                <h2 className="text-white mt-4">
                                    Wumpus is waiting on friends. You don't have
                                    to though!
                                </h2>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col justify-center items-center">
                            <img
                                src={NoOnlineFriends}
                                alt="no-friends"
                                className="w-1/2"
                            />
                            <h2 className="text-white mt-2">
                                No one is around to play with wumpus
                            </h2>
                        </div>
                    )}
                </div>
                <div className="w-2/6 text-white p-4 flex flex-col gap-4 border-l border-black-primary">
                    <h2 className="font-bold text-2xl">Active Now</h2>
                    <div className="text-center flex flex-col gap-2">
                        <h2>It's quiet for now...</h2>
                        <p>
                            When a friend starts an activity-like playing a game
                            or hanging out an voice-we'll show it here!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentBox;
