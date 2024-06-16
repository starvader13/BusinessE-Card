import axios from "axios";

const LogInFunction = async (data) => {
    try{
        const response = await axios.post("http://localhost:4000/api/signin", data);
        window.localStorage.setItem("authentication", response.data.token);
        return {
            msg: response.data.msg,
            success: true,
        };
    }catch(error) {
        return {
            msg: error.response.data.msg,
            success: false
        };
    }
}

export default LogInFunction;
