import { useState, useEffect } from "react";


export function useLocalStorageState(initialState, key){
    const [value, setValue] = useState(function () {
        const storageValue = localStorage.getItem(key);
        return storageValue? JSON.parse(storageValue) : initialState; //porque en el storage es un string entonces lo volvemos a convertir
      });

      useEffect(()=> {
        localStorage.setItem(key , JSON.stringify(value));
      },[value,key]);
    return [value,setValue];
}