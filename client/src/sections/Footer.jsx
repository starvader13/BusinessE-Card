import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <section className={"flex justify-between border-none rounded-lg bg-gray-100 mx-9 py-8 px-48 font-mono tracking-tight"}>
            <div className={"flex flex-col justify-start"}>
                <div className={"text-xl pb-4"}>Author Details</div>
                <ul>
                    <a href="https://ashutoshgupta.dev" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Personal Website</li></a>
                    <a href="https://github.com/starvader13" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Github</li></a>
                    <a href="https://www.linkedin.com/in/ashutoshgupta13/" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Linkedin</li></a>
                    <a href="https://x.com/ashutosh01113" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Twitter</li></a>
                    <a href="https://gitlab.com/starvader13" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Gitlab</li></a>
                </ul>
            </div>
            <div className={"flex flex-col justify-start"}>
                <div className={"text-xl pb-4"}>Project Details</div>
                <ul>
                    <li className={"cursor-pointer"} onClick={()=>navigate("/")}>Home</li>
                    {/*<li className={"cursor-pointer"} onClick={()=>navigate("/price")}>Price</li>*/}
                    <a href="" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Github</li></a>
                    <a href="" target={"_blank"} rel={"noreferrer noopener"}><li className={"cursor-pointer"}>Docs</li></a>
                </ul>
            </div>
            <div className={"flex flex-col justify-start items-center"}>
                <div className={"text-xl pb-4"}>Copyright</div>
            </div>
        </section>
    );
};

export default Footer;
