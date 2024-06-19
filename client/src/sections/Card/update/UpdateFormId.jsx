import {useState} from "react";

const UpdateFormId =({handleIdSubmit}) => {

    const [animate, setAnimate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(()=>{
            handleIdSubmit(e);
        }, 1200);
    }

    return <form onSubmit={handleSubmit}
                 className={`border-none ml-8 mr-4 flex flex-col justify-center items-center px-8 py-3 bg-[url('/stars.jpg')] bg-cover h-[90vh] rounded-xl gap-4 mb-4 ${animate ? 'animate-pingOnce': ''}`}>
        <div className={"w-[40%] h-[50%] flex flex-col justify-center items-center m-8 p-8 gap-12 rounded-xl "}>
            <input type="text" placeholder={"Card Unique id"} name={"uniqueId"}
                   className={"text-4xl rounded-2xl p-5 bg-gradient-to-t w-4/5 from-fuchsia-100 to-cyan-100 border-2 border-gray-400"}
                   required={true}/>
            <button type={"submit"}
                    className={"flex flex-row justify-center items-center text-3xl rounded-2xl border-2 bg-white px-4 py-4 hover:border-none hover:ring hover:ring-blue-500  bg-gradient-to-t from-blue-400 to-gray-400 gap-4"} onClick={()=>setAnimate(!animate)}>
                Submit
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
                </svg>
            </button>
        </div>
    </form>
}

export default UpdateFormId;
