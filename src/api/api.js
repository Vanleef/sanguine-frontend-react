// import { getToken } from "./auth";

const api =  {
    baseURL: 'http://localhost:8000/'
}

export const banksRequest = async ()=> {
    try {
    let response = await fetch(api.baseURL);
    let data = await response.json();
    return data;
    } catch (error) {
        console.log(error);
    }
    return;
}

export async function createUser(userData) {
  let res;
    try {
      await fetch(api.baseURL + 'user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      }).then((response) => response.json()
      ).then((data) => res = data);
    }
    catch (error) {
      console.log(error);
    }
    return res;
  }

  export async function getUserDetail(token) {
    let res;
    try {
      await fetch(api.baseURL + 'user/', {
        method:'GET', 
        headers: {
          'Authorization': 'Basic ' + btoa(`${token}:`),
           'Content-Type': 'application/json',
        }
      }).then((response) =>{ if(response.status === 401) return;
      else response.json()}
      ).then((data) => res = data);
    }
    catch (error) {
      console.log(error);
    }
    return res;
;
  }

  export async function getAuth(email, senha) {
    let res;
    try {
      await fetch(api.baseURL + 'auth-token/' , {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa(`${email}:${senha}`)
        }
      }).then((response) => response.json())
      .then((data) => res = data);
    }
    catch (error) {
      console.log(error);
    }
    return res;
  }

