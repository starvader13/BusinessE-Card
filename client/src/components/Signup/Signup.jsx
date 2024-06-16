import Input from "../../sections/sign/Input.jsx";

const Signup = () => {
    return (
        <div className={"border-none rounded-lg m-6 mt-0 mb-4 flex flex-col justify-center items-center h-[90vh] gap-16 bg-gradient-to-r from-blue-200 to-fuchsia-100 "}>
            <div className={"text-5xl font-light font-serif tracking-tight text-gray-600 "}>Create your Business E-Card Id </div>
            <Input />
        </div>
    );
};

export default Signup;
