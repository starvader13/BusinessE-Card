import {useForm} from "react-hook-form";

const Input = () => {
    const {register, handleSubmit, formState: {errors} } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const test = () => {
        console.log("render")
    }

    return <form onSubmit={handleSubmit(test)} className={"flex flex-col justify-center items-center gap-4 w-full pb-28"}>
        <div className={"input-div"}>
            <input {...register("username", {required: "Username is required."})} placeholder={"Username"} className={"input-text"} />
            <div className={"input-error-message"}>{errors.username?.message}</div>
        </div>

        <div className={"input-div"}>
            <input {...register("email", {required: "Email is required."})} placeholder={"Email"} className={"input-text"} />
            <div className={"input-error-message"}>{errors.email?.message}</div>
        </div>

        <div className={"input-div"}>
            <input {...register("password", {required: "Password is required"})} placeholder={"Password"} className={"input-text"} />
            <div className={"input-error-message"}>{errors.password?.message}</div>
        </div>

        <input className={"border-2 p-2 bg-gradient-to-br from-yellow-700 to-grey-600 text-lg"} type="submit" value={"Submit"}/>
    </form>
};

export default Input;
