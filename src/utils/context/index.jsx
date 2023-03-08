
import React from 'react'
import { useContext , createContext,useState} from 'react';






const authContext= createContext();

function useAuth(){
const [authed,setAuthed] = useState(false);
const [userName,setUserName] = useState('');

    return{
        authed,
        userName,
     login(username){
            return new Promise((res)=>{
                setAuthed(true);
                setUserName(username);
                res();
            })
        },
        logout(){
            return new Promise((res)=>{
                setAuthed(false);
                setUserName('');
                res();
            });
        },
    };
}

export  function AuthProvider({children}){
    const auth=useAuth();

    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}




export default  function AuthConsummer(){
    return useContext(authContext);
}


