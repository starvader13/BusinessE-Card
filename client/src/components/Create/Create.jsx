import CardInput from "../../sections/Card/CardInput.jsx";
import {useForm} from "react-hook-form";
import Template from "../../sections/Card/Template.jsx";
import {useState} from "react";

const Create = () => {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        defaultValues: {
            name: "",
            description: "",
            hobbies: "",
            linkedin: "",
            twitter: "",
            profilePicture: []
        }
    });

    const [url,setUrl] = useState("");

    const formData = watch();

    return (
        <div className={"grid grid-cols-2"} >
            <CardInput headingComponent={"Create E-Card"} buttonContent={"Create Card"} register={register} handleSubmit={handleSubmit} errors={errors} setUrl={setUrl} url={url}/>

            <Template name={formData.name} description={formData.description} hobbies={formData.hobbies} linkedin={formData.linkedin} twitter={formData.twitter} url={url}/>
        </div>
    );
};

export default Create;
