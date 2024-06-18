import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Template = ({name, description, hobbies, linkedin, twitter, url}) => {

    const hobbiesArray = hobbies.split(", ");
    const linkedinName = linkedin.split('/')[4];
    const twitterName = twitter.split('/')[3]

    console.table(hobbiesArray);

    return <div className={"flex flex-col justify-start items-center border-none rounded-xl mr-8 mb-4 p-8 bg-gradient-to-tr from-emerald-200 to-red-200 gap-4"}>
        {
            name || description || (hobbiesArray.length !==0 && hobbiesArray[0] !== "") || linkedin || twitter || url ? 
                null : <div className={"flex justify-center items-center flex-col "}>
                    <div className={"p-8 text-5xl font-bold text-gray-500"}>Sneak Peek: Start Filling Card Details</div>
                    <img src="sneak-peek.gif" alt="Sneak Peek" className={"rounded-2xl border-4 border-violet-200 hover:animate-pulse mt-8"} width={480}/>
                </div>
        }
        
        {
            url ? <div
                className={"m-6 flex justify-center rounded-xl bg-gradient-to-tl from-amber-200 to-violet-500 w-1/5"}>
                <img src={url} alt="Profile/Avatar"
                     className={"w-48 h-48 rounded-full border-none p-2 bg-gradient-to-tr from-emerald-100 to-red-100"}/>
            </div> : null
        }

        {
            name ? <div className={"text-5xl font-mono font-semibold tracking-tight uppercase bg-gradient-to-b from-red-400 to-indigo-500 text-transparent bg-clip-text"}>{name}</div> : null
        }

        {
            description ?
                <div className={"text-2xl font-serif font-semibold capitalize text-gray-600 px-8"}>{description}</div> : null
        }

        {
            hobbiesArray.length !==0 && hobbiesArray[0] !== "" ? <>
                    <div className={"p-1 bg-gray-300 rounded-xl w-full"}></div>
                    <div className={"flex justify-start items-start border-none w-4/5 flex-col gap-2 my-4"}>
                        <div
                            className={"text-2xl font-mono font-bold text-gray-600 tracking-tighter rounded-md bg-gray-50 p-2 pt-3 bg-gradient-to-b from-fuchsia-300 to-gray-400 hover:ring-white hover:ring"}>Talk To Me About :
                        </div>
                        <ol className={"animate-spinOnce"}>
                            {
                                hobbiesArray.map((hobby, index) => {
                                    return <li key={index} className={"text-3xl pl-8 pb-2 text-transparent bg-gradient-to-t from-gray-700 to-red-600 bg-clip-text font-semibold uppercase hover:animate-bounce"}>
                                        - {hobby}
                                    </li>
                                })
                            }
                        </ol>
                    </div>
                </> : null
        }

        {
            linkedinName || twitterName ? <>
                <div className={"p-1 bg-gray-300 rounded-xl w-full"}></div>
                <div className={"flex justify-evenly w-4/5 py-4 gap-16"}>
                    {
                        linkedinName ? <div className={"flex justify-start border-1 p-3 px-5 rounded-lg items-center gap-2 cursor-pointer bg-gradient-to-b from-blue-300 to-cyan-50 hover:border-none hover:ring hover:ring-violet-300 hover:touch-pinch-zoom hover:text-2xl text-lg"}>
                            <FaLinkedin className={"w-8 h-8"}/>
                            <a href={linkedin} target={"_blank"} rel={"noreferrer noopener"} className={"font-mono tracking-tighter font-semibold bg-gradient-to-b from-gray-800 to-gray-500 text-transparent bg-clip-text"}>{linkedinName}</a>
                        </div> : null
                    }
                    {
                        twitterName ? <div className={"flex justify-start border-1 p-3 px-5 cursor-pointer rounded-lg items-center gap-2 bg-white bg-gradient-to-b from-blue-300 to-cyan-50 hover:border-none hover:ring hover:ring-violet-300 hover:touch-pinch-zoom hover:text-2xl text-lg"}>
                            <FaSquareXTwitter className={"w-8 h-8"}/>
                            <div><a href={twitter} target={"_blank"} rel={"noreferrer noopener"} className={"font-mono tracking-tighter font-semibold bg-gradient-to-b from-gray-800 to-gray-500 text-transparent bg-clip-text"}>{twitterName}</a></div>
                        </div> : null
                    }

                </div>
            </> : null
        }

    </div>
};

export default Template;
