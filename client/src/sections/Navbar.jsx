import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useRecoilValue} from "recoil";
import {signedAtom} from "../store/SignAtom.js";
import logo from "/logo.svg";

const Navbar = () => {
    const navigate = useNavigate();
    const [transition, setTransition] = useState(false);
    const signed = useRecoilValue(signedAtom);

    const logout = () => {
        localStorage.removeItem("authorization");
        localStorage.removeItem("user");
        navigate("/");
        location.reload();
    }

    return<section className={"my-4 mx-4 text-center"}>
        <div className={"hidden lg:block"}>
            <ul className={"flex justify-between items-center w-full bg-white border-2 shadow-2xl shadow-cyan-100 px-2 py-2 font-lato rounded-lg text-lg leading-7"}>
                <div className={"flex justify-between items-center w-[25%] gap-[10px] pl-6"}>
                    <li><img src={logo} alt="Home" onClick={() => navigate("/")} className={"cursor-pointer"}/></li>
                    {/*<li className={"nav-text"} onClick={()=>navigate("/")}>Home</li>*/}
                    <li className={"nav-text"} onClick={() => navigate("/create-card")}>Create</li>
                    <li className={"nav-text"} onClick={() => navigate("/cards")}>Cards</li>
                    <li className={"nav-text"} onClick={() => navigate("update-card/")}>Update</li>
                    <li className={"nav-text"} onClick={() => navigate("/delete-card")}>Delete</li>
                </div>
                {
                    signed ?
                        <div className={"flex justify-end items-center w-[13%] xl:w-[10%] gap-12 pr-6"}>
                            <li className={"nav-text capitalize"}>{localStorage.getItem('user')}</li>
                            <li className={"nav-text"} onClick={logout}>Logout</li>
                        </div> :
                        <div className={"flex justify-end items-center w-[13%] xl:w-[10%] gap-12 pr-6"}>
                            <li className={"nav-text"} onClick={() => navigate("/sign-up")}>Signup</li>
                            <li className={"nav-text"} onClick={() => navigate("/log-in")}>Login</li>
                        </div>
                }
            </ul>
        </div>

        <div className={"block lg:hidden border-1 shadow-2xl shadow-cyan-100 rounded-lg"}>
            <div
                className={"flex justify-between items-center w-full bg-white  px-3 py-2 font-lato  text-lg leading-7 h-10 "}>
                <div className={"nav-text"} onClick={() => navigate("/")}>Home</div>
                <div className={"flex justify-between items-center"}>
                    <ul className={"flex justify-between items-center w-[15%] pr-6 gap-[10px]"}>
                        {
                            signed ? <>
                                <li className={"nav-text"} onClick={() => navigate("/sign-up")}>Signup</li>
                                <li className={"nav-text"} onClick={() => navigate("/log-in")}>Login</li>
                            </> : <>
                                <li className={"nav-text"}>Profile</li>
                                <li className={"nav-text"} onClick={logout}>Logout</li>
                            </>
                        }

                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="size-6 cursor-pointer hover:rotate-12 "
                         onClick={() => setTransition(!transition)}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </div>
            </div>
            {
                transition ?
                    <ul className={"flex flex-col text-center justify-between px-3 py-2 font-lato  text-lg leading-7 duration-700 transition-all"}>
                        <li className={"nav-text"} onClick={() => navigate("/create-card")}>Create </li>
                        <li className={"nav-text"} onClick={() => navigate("/cards")}>Cards </li>
                        <li className={"nav-text"} onClick={() => navigate("update-card/")}>Update </li>
                        <li className={"nav-text"} onClick={() => navigate("/delete-card")}>Delete </li>
                    </ul> : null
            }

        </div>
    </section>
};

export default Navbar;
