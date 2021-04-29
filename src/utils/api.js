import axios from "axios"




export default{
    getEmploy:()=>{
        return axios.get("https://randomuser.me/api/?results=50");
    }
}