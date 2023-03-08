import { useEffect, useState } from "react";



export function useFetch(Url,Thing){

    const[data,setData]=useState({});
    const [error,setError]=useState(false);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        if(!Url) return
        setIsLoading(true)
        async function fetchData(){
            try {
                const response =await fetch(Url,Thing);
                if(!response.ok){
                     const {errorMessage} = await response.json();
                    throw new Error(errorMessage);
                }else{
                   const data = await response.json();
                   setData(data);
                }

            } catch (error) {
                console.log(error);
                setError(error);
                
            }finally{
                setIsLoading(false);
            }
            
        }
        fetchData();
    },[Url]);

return { isLoading,data, error};
}