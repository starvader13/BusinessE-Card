
const CardInput = ({headingComponent, buttonContent, register, handleSubmit, errors, url, setUrl}) => {

    const handleProfileAvatar = (data) => {
        const file = data[0];
        if(file){
            setUrl(URL.createObjectURL(file));
        }
    };

    const test = (data) => {
        console.log(data);
    }

    return <form className={"border-none ml-8 mr-4 flex flex-col justify-center items-center px-8 py-3 bg-gradient-to-bl from-emerald-100 to-blue-300 h-[90vh] rounded-xl gap-4 mb-4"} onSubmit={handleSubmit((data)=>{test(data)})}>
        <div className={"text-7xl mb-4 font-medium font-serif tracking-tight rounded-xl hover:animate-bounce text-gray-600"}>{headingComponent}</div>
        <div className={"flex flex-col w-full items-center"}>
            <div className={"flex flex-row gap-8 w-full justify-end items-center pr-40"}>
                <label htmlFor="name" className={"text-lg"}>Name : </label>
                <input type={"text"} {...register("name", {required: "Name is required"})} placeholder={"Name"}
                       className={"input-text w-[55%]"}/>
            </div>
            {
                errors.name ?
                    <div className={"input-error-message font-semibold text-md"}>{errors.name?.message}</div> : null
            }
        </div>

        <div className={"flex flex-col w-full items-center"}>
            <div className={"flex flex-row gap-8 w-full justify-end items-center pr-40"}>
                <label htmlFor="description" className={"text-lg"}>Description : </label>
                <textarea {...register("description", {required: "Description is required"})} placeholder={"Description"} rows="5" cols="50" className={"input-text w-[55%]"}/>
            </div>
            {
                errors.description ?
                    <div className={"input-error-message font-semibold text-md"}>{errors.description?.message}</div> : null
            }
        </div>

        <div className={"flex flex-col w-full items-center"}>
            <div className={"flex flex-row gap-8 w-full justify-end items-center pr-40"}>
                <label htmlFor="hobbies" className={"text-lg"}>Hobbies : </label>
                <input {...register("hobbies", {required: "Hobbies are required"})} placeholder={"Code, Chess, Cheese"} className={"input-text w-[55%]"}/>
            </div>
            {
                errors.hobbies ?
                    <div className={"input-error-message font-semibold text-md"}>{errors.hobbies?.message}</div> : null
            }
        </div>

        <div className={"flex flex-col w-full items-center"}>
            <div className={"flex flex-row gap-8 w-full justify-end items-center pr-40"}>
                <label htmlFor="linkedin" className={"text-lg"}>Linkedin : </label>
                <input {...register("linkedin", {required: "Linkedin URL is required"})} placeholder={"https://www.linkedin.com/in/ashutoshgupta13/"} className={"input-text w-[55%]"}/>
            </div>
            {
                errors.linkedin ?
                    <div className={"input-error-message font-semibold text-md"}>{errors.linkedin?.message}</div> : null
            }
        </div>

        <div className={"flex flex-col w-full items-center"}>
            <div className={"flex flex-row gap-8 w-full justify-end items-center pr-40"}>
                <label htmlFor="twitter" className={"text-lg"}>Twitter : </label>
                <input {...register("twitter", {required: "Twitter URL is required"})} placeholder={"https://x.com/ashutosh01113"} className={"input-text w-[55%]"}/>
            </div>
            {
                errors.twitter ?
                    <div className={"input-error-message font-semibold text-md"}>{errors.twitter?.message}</div> : null
            }
        </div>

        <div className={"flex flex-col gap-2 w-full justify-center items-center pt-1"}>
            <label htmlFor="profilePicture" className={"text-lg"}>Profile / Avatar :</label>
            <div className={"flex flex-row justify-center w-full items-center gap-8 pl-14"}>
                <input type={"file"} {...register("profilePicture", {required: "Profile/Avatar is required"})} placeholder={"Profile/Avatar"} accept={"image/*"} className={"input-text bg-white w-[58%]"} onChange={(e)=>{handleProfileAvatar(e.target.files)}}/>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                </svg>
            </div>
        </div>

        {url ? <img src={url} alt="" className={"rounded-full w-40 h-40 border-gray-400 border-2"}/> : null}

        <input type="submit" id={"submit"} className={"border-2 py-3 px-6 bg-gradient-to-br from-yellow-700 to-grey-600 text-xl rounded-xl font-bold font-serif border-none hover:ring-2 hover:ring-gray-400 cursor-pointer active:(bg-gradient-to-br active:from-yellow-900 active:to-grey-100)"} value={buttonContent} />
    </form>
};

export default CardInput;
