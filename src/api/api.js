// import { getToken } from "./auth";

const api =  {
    baseURL: 'http://localhost:8000/'
}

export const banksRequest = async ()=> {
    let response = await fetch(api.baseURL);
    let data = await response.json();
    return data;
}

