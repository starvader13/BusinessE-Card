import CardInput from "../../sections/Card/CardInput.jsx";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {dataCardAtom} from "../../store/UpdateCardAtom.js";
import Template from "../../sections/Card/Template.jsx";
import UpdateFormId from "../../sections/Card/update/UpdateFormId.jsx";

const Update = () => {
    const [uniqueId, setUniqueId] = useState("");
    const data = useRecoilValue(dataCardAtom(uniqueId));

    const handleIdSubmit = (e) => {
        setUniqueId(e.target.elements.uniqueId.value);
    }

    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm();

    useEffect(() => {
        if(data.keys!==0){
            reset({
                name: data.name || "",
                description: data.description || "",
                hobbies: data.hobbies?.join(", ") || "",
                linkedin: data.linkedin || "",
                twitter: data.twitter || "",
                profilePicture: ""
            })
        }
    }, [data, reset]);

    const formData = watch();
    const [url,setUrl] = useState("");

    return <>
        {
            data.name && data.name.length > 0 ? <div className={"grid grid-cols-2"}>
                <CardInput headingComponent={"Update E-Card"} buttonContent={"Update Card"} register={register} handleSubmit={handleSubmit} errors={errors} setUrl={setUrl} url={url}/>
                <Template name={formData.name} description={formData.description} hobbies={formData.hobbies} linkedin={formData.linkedin} twitter={formData.twitter} url={url}/>
            </div> : <UpdateFormId handleIdSubmit={handleIdSubmit}/>
        }
    </>
};

export default Update;
