/* eslint-disable react/prop-types */

import ListWatched from "./ListWatched";

const WatchedList = ({watched , onDeleteWatched}) => {
    return <ul className="list">
      {watched?.map((movie) => (
        <ListWatched movie={movie} key={movie?.imdbID} onDeleteWatched = {onDeleteWatched}/>
      ))}
    </ul>
  }
 export default WatchedList;  