import {selectorFamily} from "recoil";
import axios from "axios";

export const dataCardAtom = selectorFamily({
    key: "dataCardAtom",
    get: id => async () => {
        try{
            if(id===""){
                return {};
            }
            const response = await axios.get(`http://localhost:4000/api/card/${id}`);
            return response.data
        }
        catch{
            return {}
        }
    }
})
