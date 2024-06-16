import axios from "axios";

const SignUpFunction = async (data) => {
    try{
        const response = await axios.post("http://localhost:4000/api/signup", data);
        return {
            msg: response.data.msg,
            success: true
        };
    }catch(error) {
        return {
            msg: error.response.data.msg,
            success: false
        };
    }

}

export default  SignUpFunction;
