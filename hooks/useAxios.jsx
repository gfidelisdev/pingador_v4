import React from "react";
import axios from "axios";
const baseUrl = 'http://10.4.7.61:8080';
const headers= {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
}
let axiosOptions = {
    headers
};
function useAxios(url, method, options=axiosOptions) {


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

export default useAxios;
