import { Link } from "react-router-dom";
import Logo from "../../assets/discord_main_logo.svg";

function Signup() {
    return (
        <div className="relative">
            <Link
                to="/"
                className="absolute py-10 md:px-8 top-0 left-1/3 md:left-0"
            >
                <img src={Logo} alt="logo" />
            </Link>
            <div className="bg-black-tertiary md:bg-login-image h-screen bg-no-repeat flex justify-center items-center bg-cover">
                <div className="flex items-center gap-8 md:px-16 py-8 rounded-md bg-black-tertiary text-white">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-2xl font-semibold text-center">
                                Create an account
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="email"
                                    className="text-xs font-medium"
                                >
                                    EMAIL
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    className="bg-black-secondary border border-black-primary py-1 focus:outline-none pl-3 md:w-96"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="username"
                                    className="text-xs font-medium"
                                >
                                    USERNAME
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="bg-black-secondary border border-black-primary py-1 focus:outline-none pl-3 md:w-96"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="password"
                                    className="text-xs font-medium"
                                >
                                    PASSWORD
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    className="bg-black-secondary border border-black-primary py-1 focus:outline-none pl-3 md:w-96"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-7 mt-4">
                            <div>
                                <button className="bg-blue-tertiary py-2 px-28 font-bold md:w-96">
                                    Continue
                                </button>
                            </div>
                            <div className="flex gap-2 text-sm">
                                <Link to="/login" className="text-[#00b0f4]">
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
