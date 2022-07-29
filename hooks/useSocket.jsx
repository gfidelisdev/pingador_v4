import React from "react";
const baseUrl = 'http://10.4.7.61:8080';


function useSocket() {
    async function execute(){
        console.log(url)
        return await axios(url, axiosOptions)
    }
    if (!(url.startsWith('http://') || url.startsWith('https://'))) {
        url = baseUrl+url
    }
    axiosOptions = {method, ...options, ...axiosOptions}
    console.log("🚀 ~ file: useAxios.jsx ~ line 22 ~ useAxios ~ axiosOptions", axiosOptions)

    return (execute())
    
}

export default useSocket;
