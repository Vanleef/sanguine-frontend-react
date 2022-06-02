import { createContext, useEffect, useState } from "react";
import * as api from '.././api/api'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userDetail, setUserDetail] = useState();
  const [userToken, setUserToken] = useState();
  

  useEffect(() => {
      const localToken = localStorage.getItem("user_token");
      const usersStorage = localStorage.getItem("users_bd");
    
      if(userToken) {
        try {
          api.getUserDetail(userToken.token).then(response=>{ setUserDetail(response)});

          if (userDetail) {
            setUser(userDetail[0]);
           }
           
        } catch (error) {
        }
       
      } else if(localToken && usersStorage) {
        const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === JSON.parse(localToken).email);
        
        if (hasUser) {
          setUser(hasUser[0]);
         }
    }
   
    
  }, []);

  useEffect(()=>{
    if(userToken) {
      if(user){
        const email = user.email;
        localStorage.setItem("user_token", JSON.stringify({ email, userToken }));
      }
    }
  }, [userToken]);



  const signin = (userData) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));
    const email = userData.email;
    const password = userData.senha;
    
    let hasUser = userDetail || usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].senha === password) {
        api.getAuth(email, password).then(response=>{ setUserToken(response)})
        setUser(hasUser[0]);
        return alert("Login realizado com sucesso");
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (userData) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    let hasUser = userDetail || usersStorage?.filter((user) => user.email === userData.email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage,  userData];
    } else {
      newUser = [ userData];
    }

    try {
      api.createUser(userData);
    } catch (error) {
      console.log("A requisição no backend falhou: " + error);
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));
    signin(newUser);

    return alert("Cadastro realizado com sucesso");
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const authToken = () =>{
    return userToken;
  }


  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout, authToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
