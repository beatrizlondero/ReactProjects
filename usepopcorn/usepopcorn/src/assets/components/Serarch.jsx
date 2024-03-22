/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useKey } from "../../fetching/useKey";

const Search = ({query, setQuery, onCloseMovie}) => {
  const inputEl = useRef (null); //we inicialize the useRef with null when we will to use an element of the DOM

  useKey("Enter", function(){
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
        setQuery("");
        onCloseMovie();
  })
  useKey("NumpadEnter", function(){
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
        setQuery("");
        onCloseMovie();
  })
  // useEffect(()=>{
  //   function callback(e){
  //     if (document.activeElement === inputEl.current) return;
  //     if (e.code === 'Enter' || e.code === 'NumpadEnter'){
  //       inputEl.current.focus();
  //       setQuery("");
  //       onCloseMovie();
  //     }
  //   }
  //   document.addEventListener('keydown',callback)
  //   return ()=> {
  //       document.removeEventListener("keydown", callback);
  //   };
  // },[setQuery,onCloseMovie]);
 
    // useEffect(()=> {
    //   const el = document.querySelector(".search");
    //   console.log(el);
    //   el.focus();
    // },[]) that's not the correct way to do this in react, you have to use useRef instead



    return (
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl} //here we used the useRef declarate previusly
      />
    );
  };
export default Search;  