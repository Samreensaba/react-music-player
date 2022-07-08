import React from "react";
import {Star, StarFill} from 'react-bootstrap-icons'
import { addToFav, removeFromFav } from "../store/actions/actions";
import { useDispatch, useSelector} from 'react-redux'


/* const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch)=> ({
  addToFavourites: (song) =>dispatch(addToFav(song)),
  removeFromFavourites: (song) =>dispatch(removeFromFav(song))
}) */



const Song = ({ track}) => {

  const songs = useSelector((state)=>
    state.favourites
  )

  const dispatch = useDispatch()
  
  const isFav = songs.includes(track.title)
  const toggleFavourite =()=> {
  isFav
  ? dispatch(removeFromFav(track.title))
  : dispatch(addToFav(track.title))
}

  return(

  <div className="py-3 trackHover">
    {
        isFav
        ?<StarFill color= "gold" className='mr-4' onClick={toggleFavourite}/>
        :<Star color='gold' className='mr-4' onClick={toggleFavourite}/>
    }
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);
}

export default Song
