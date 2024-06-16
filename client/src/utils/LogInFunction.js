import axios from "axios";

const LogInFunction = async (data) => {
    try{
        const response = await axios.post("http://localhost:4000/api/signin", data);
        window.localStorage.setItem("authorization", response.data.token);
        window.localStorage.setItem("user", response.data.msg.split(" ")[6]);
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
