import { Link } from "react-router-dom";
import QR from "../../assets/qr_code.png";
import Logo from "../../assets/discord_main_logo.svg";

function Login() {
    return (
        <div className="relative">
            <Link
                to="/"
                className="absolute py-10 md:px-8 top-0 left-1/3 md:left-0"
            >
                <img src={Logo} alt="logo" />
            </Link>
            <div className="bg-black-tertiary md:bg-login-image h-screen bg-no-repeat flex justify-center items-center bg-cover">
                <div className="flex items-center gap-8 md:p-8 rounded-md bg-black-tertiary text-white">
                    <div className="flex flex-col gap-4">
                        <div>
                            <h2 className="text-2xl font-bold">
                                Welcome Back!
                            </h2>
                            <p className="text-sm font-light">
                                We're so excited to see you again!
                            </p>
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
                                    className="bg-black-secondary border border-black-primary py-1 focus:outline-none pl-3"
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
                                    className="bg-black-secondary border border-black-primary py-1 focus:outline-none pl-3"
                                />
                            </div>
                            <div>
                                <p className="text-[#00b0f4] text-sm cursor-pointer">
                                    Forgot your password?
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <div>
                                <button className="bg-blue-tertiary py-2 px-28 font-bold">
                                    Login
                                </button>
                            </div>
                            <div className="flex gap-2 text-sm">
                                <p>Need an account?</p>{" "}
                                <Link to="/signup" className="text-[#00b0f4]">
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-center items-center gap-4">
                        <div className="p-2 rounded-md bg-white">
                            <img src={QR} alt="qr-image" />
                        </div>
                        <div className="text-center flex flex-col gap-4">
                            <h2 className="text-xl font-bold">
                                Log in with QR Code
                            </h2>
                            <p>
                                Scan this with the{" "}
                                <strong>
                                    Discord mobile <br /> app
                                </strong>{" "}
                                to log in instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
