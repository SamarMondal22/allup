import axios from "axios";

const adminURL = "https://wtsacademy.dedicateddevelopers.us/api";
export const baseURL = adminURL;

const axiosIntance = axios.create({
    baseURL
});



export const Profile_pic = (media) => {
    // return `https://wtsacademy.dedicateddevelopers.us/api/uploads/user/profile_pic/${media}`;
    return `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`;
}

export const upload_pic = (media) => {
    // return `https://wtsacademy.dedicateddevelopers.us/api/uploads/user/profile_pic/${media}`;
    return `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`;
}

axiosIntance.interceptors.request.use(
    async function (config){
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if(token !== undefined || token !== null){
            config.headers["x-access-token"] = token;
        }
        return config
    },

    function(err){
        return new Promise.reject(err);
    }
);



export default axiosIntance;