/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "./assets/components/Box";
import NavBar from "./assets/components/NavBar";
import Logo from "./assets/components/Logo";
import Search from "./assets/components/Serarch";
import NumResults from "./assets/components/NumResults";
import MainComponent from "./assets/components/MainComponent";
import MovieList from "./assets/components/MovieList";
import Summary from "./assets/components/Summary";
import WatchedList from "./assets/components/Watchedlist";
import MovieDetails from "./assets/components/MovieDetails";
import Loader from "./assets/components/Loader"
import { useMovies } from "./fetching/useMovies";
import { useLocalStorageState } from "./fetching/useLocalStorageState";




export default function App() {
  
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // const [isWatched, setIsWatched] = useState(false);
  const{movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  
  // useEffect(()=>
  // console.log("after evrey render"));

  // useEffect(()=>
  // console.log("After initial render"),[]);
  // useEffect(()=>
  // console.log("query render"),[query]);

  // console.log("during render")

 
  const ErrorMessage = ({message})=>{
    return <p className="error"> <span>⛔</span>{message}</p>
  }
  const handleSelectMovie = (id)=>{
    
    setSelectedId(selectedId === id? null: id);
  }
  function handleCloseMovie (){
    setSelectedId(null);
  }

  const handleAddWatched = (movie) =>{
    // console.log (watched);
    // if (watched === null) setWatched(movie); 
    setWatched ((watched) => [...watched , movie]);
    // to keep in the local storage
    // localStorage.setItem("watched" , JSON.stringify([...watched, movie])); //the storage only accept string, for that
    // we pass a json.stringify, and watched is not updated because de hook till now isn`t process, we have to add the 
    //movie like in the setWatched
    handleCloseMovie();
  }

  const handleDeleteWatched = (id) =>{
    setWatched((watched) => watched.filter(movie => movie.imdbID !== id ));
  }
 

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} onCloseMovie = {handleCloseMovie} />
        <NumResults movies={movies} />
      </NavBar>
      <MainComponent>
        {/* <Box element = {<MovieList movies={movies}/>}/> 
        <Box element={<>
          <Summary watched = {watched}/>
          <WatchedList watched={watched}/>
        </>}/>
        ESTA ES UNA FORMA DE PASAR EN VEZ DE CHILDREN PASAR COMO UN PROP LOS ELEMENTOS
        THIS IS A WAY TO PASS PROPS INSTEAD A CHILDREN BETWEEN COMPONENTS WITH THE SAME RESULTS
        */}
        <Box>
          {/* { isLoading? <Loader/>:<MovieList movies={movies}/>} */}
          {isLoading && <Loader />}
          {!isLoading && !error &&
           <MovieList movies={movies} 
              onSelectMovie = {handleSelectMovie}
              
              />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails selectedId={selectedId}  
            onCloseMovie = {handleCloseMovie} 
            onAddWatched = {handleAddWatched}
            watched = {watched}
            />
          ) : (
            <>
              <Summary watched={watched} />

              <WatchedList watched={watched} onDeleteWatched = {handleDeleteWatched} />
            </>
          )}
        </Box>
      </MainComponent>
    </>
  );
}

