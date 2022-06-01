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
        
    }
    return;
}

export async function createUser(userData) {
    try {
      const response = await fetch(api.baseURL + 'user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      })
      let data = response.json();
      console.log("Usuário cadatrado com sucesso!");
      return data;
    }
    catch (error) {
      console.log("Ocorreu um problema com o cadastro de Usuário!");
    }
  }

