import {useForm} from "react-hook-form";
import {useSetRecoilState} from "recoil";
import {signInResponseAtom, signUpResponseAtom} from "../../store/SignAtom.js";
import {useNavigate} from "react-router-dom";

const Input = ({signUp=false, buttonContent="", onSubmit}) => {
    const {register, handleSubmit, formState: {errors} } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const setSignUpResponse = useSetRecoilState(signUpResponseAtom);
    const setSignInResponse = useSetRecoilState(signInResponseAtom);
    const navigate = useNavigate();

    const action = async (data) => {
        const response = await onSubmit(data);
        signUp ? setSignUpResponse(response.msg) : setSignInResponse(response.msg);
        if(response.success){
            setTimeout(()=>{
                signUp ? setSignUpResponse("") : setSignInResponse("");
                navigate("/");
            }, 1000)
        }
    }

    return <form onSubmit={handleSubmit(data => action(data))} className={"flex flex-col justify-center items-center gap-4 w-full pb-28"}>
        {
            signUp ?
                <div className={"input-div"}>
                    <input {...register("username", {required: "Username is required."})} placeholder={"Username"}
                       className={"input-text"}/>
                    <div className={"input-error-message"}>{errors.username?.message}</div>
                </div> : null
        }

        <div className={"input-div"}>
            <input {...register("email", {required: "Email is required."})} placeholder={"Email"}
                   className={"input-text"}/>
            <div className={"input-error-message"}>{errors.email?.message}</div>
        </div>

        <div className={"input-div"}>
            <input type={"password"} {...register("password", {required: "Password is required"})} placeholder={"Password"} className={"input-text"} />
            <div className={"input-error-message"}>{errors.password?.message}</div>
        </div>

        <input className={"border-2 py-3 px-6 bg-gradient-to-br from-yellow-700 to-grey-600 text-2xl rounded-xl font-bold font-serif border-none hover:ring-2 hover:ring-gray-400 cursor-pointer active:(bg-gradient-to-br active:from-yellow-900 active:to-grey-100)"} type="submit" value={buttonContent}/>
    </form>
};

export default Input;
