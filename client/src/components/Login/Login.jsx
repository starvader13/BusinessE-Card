import Input from "../../sections/sign/Input.jsx";
import FlashMessage from "../FlashMessage/Flash Message.jsx";
import {useRecoilValue} from "recoil";
import { signInResponseAtom } from "../../store/SignAtom.js";
import logInFunction from "../../utils/LogInFunction.js";

const Login = () => {
    const signInResponse = useRecoilValue(signInResponseAtom);

    return (
        <div className={"border-none rounded-lg m-6 mt-0 mb-4 flex flex-col justify-center items-center h-[90vh] gap-16 bg-gradient-to-r from-blue-200 to-fuchsia-100"}>
            <div className={"grid grid-cols-6 w-[90%]"}>
                <div className={"col-span-4 flex flex-col justify-center gap-16 items-center pt-8"}>
                    <div>{signInResponse ? <FlashMessage message={signInResponse}/> : null}</div>
                    <div className={"text-7xl font-light font-serif tracking-tight text-gray-600 "}>Create your Business E-Card Id
                    </div>
                    <Input buttonContent={"LogIn"} onSubmit={logInFunction}/>
                </div>

                <div className={"col-span-2 "}>
                    <img src="welcome.webp" alt="Welcome back" className={"border-none rounded-2xl"}/>
                </div>
            </div>
        </div>
    );
};

export default Login;
