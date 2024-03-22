/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import StarsRating from "./StarsRating";
import Loader from "./Loader";
import { useKey } from "../../fetching/useKey";
const KEY = "9ab5453c";

const MovieDetails = ({selectedId, onCloseMovie, onAddWatched, watched})=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [details, setDetails] = useState({});
    const [userRating, setUserRating] = useState("");
    const isWatched = watched?.map((movie) => movie?.imdbID).includes(selectedId);
    const watchedUserRating = watched?.find((movie) => movie?.imdbID === selectedId)?.userRating;
    const countRef = useRef(0);
    const {
        Title : title,
        Year : year, 
        Poster : poster,
        Runtime : runtime,
        imdbRating,
        Plot : plot,
        Released : released,
        Actors : actors, 
        Director : director,
        Genre : genre,
    } = details;


    const handleAdd = ()=>{
        const newWatchedMovie ={
            imdbID : selectedId,
            title,
            year, 
            poster,
            imdbRating : Number(imdbRating),
            runtime : Number(runtime.split(" ").at(0)) ,
            // runtime is for example 125 min - take the number of the string and convert it in a number
            userRating,
        }
        onAddWatched (newWatchedMovie);
    }
    useEffect(()=>{
        if ( userRating ) countRef.current =countRef.current + 1;
        console.log(countRef);
    },[userRating])

    useEffect(() => {
        if (!title) return;
        document.title =`Movie | ${title}`;
        return ()=>{
            document.title = "usePopcorn";
        };
    },[title]);
    useKey("Escape",onCloseMovie);

    // useEffect(()=>{
    //     function callback(e){
    //       if (e.code === 'Escape'){
    //         onCloseMovie();
    //       }
    //     }
    //     document.addEventListener('keydown',callback)
    //     return ()=> {
    //         document.removeEventListener("keydown", callback);
    //     };
    //   },[onCloseMovie]);

    useEffect(()=>{

        async function getMovieDetails() {
            try {
              setIsLoading(true);
              setError("");
              const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
              );
      
              if (!res.ok)
                throw new Error("something went wrong with fetching movie's details... ");
      
              const data = await res.json();
              if (data.Response === "False") throw new Error("Details not found");
      
              setDetails(data);
            } catch (err) {
              console.error(err.message);
              setError(err.message);
            } finally {
              setIsLoading(false);
            }
          }
      
                
          getMovieDetails();

    },[selectedId]);

    return (
      <div className="details">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <button className="btn-back" onClick={onCloseMovie}>
                🔙
              </button>
              <img src={poster} alt={`poster of the ${details} movie`}></img>
              <div className="details-overview">
                <h2>{title}</h2>
                <p>
                  {released} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>
                  <span>⭐</span>
                  {imdbRating} IMDB rating
                </p>
              </div>
            </header>
            <section>
              <div className="rating">
                {!isWatched ? (
                  <>
                    <StarsRating
                      maxRating={10}
                      size={24}
                      onSetRating={setUserRating}
                    />

                    {userRating > 0 && (
                      <button className="btn-add" onClick={handleAdd}>
                        + Add to List
                      </button>
                    )}
                  </>
                ) : (
                  <p>You rated this movie with {watchedUserRating}<span>⭐</span></p>
                )}
              </div>
              <p>
                <em>{plot}</em>
              </p>
              <p>Starring: {actors}</p>
              <p>Directed by {director}</p>
            </section>
          </>
        )}
      </div>
    );
}

export default MovieDetails;