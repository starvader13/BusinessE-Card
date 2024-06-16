import Input from "../../sections/sign/Input.jsx";
import SignUpFunction from "../../utils/SignUpFunction.js";
import {useRecoilValue} from "recoil";
import {signUpResponseAtom} from "../../store/SignAtom.js";
import FlashMessage from "../FlashMessage/Flash Message.jsx";

const Signup = () => {
    const signUpResponse = useRecoilValue(signUpResponseAtom);

    return (
        <div className={"border-none rounded-lg m-6 mt-0 mb-4 flex flex-col justify-center items-center h-[90vh] gap-16 bg-gradient-to-r from-blue-200 to-fuchsia-100"}>
            <div className={"grid grid-cols-6 w-[90%]"}>
                <div className={"col-span-4 flex flex-col justify-center gap-4 items-center pt-20"}>
                    <div>{signUpResponse ? <FlashMessage message={signUpResponse}/> : null}</div>
                    <div className={"text-7xl font-light font-serif tracking-tight text-gray-600 mb-12"}>Create your Business E-Card Id </div>
                    <Input signUp={true} buttonContent={"SignUp"} onSubmit={SignUpFunction}/>
                </div>

                <div className={"col-span-2"}>
                    <img src="/public/dilliwali-namaste-ji.gif" alt="Welcome"/>
                </div>
            </div>
        </div>
    );
};

export default Signup;
