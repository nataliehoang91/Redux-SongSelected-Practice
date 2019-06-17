import {selectSong} from '../actions'


const songReducer=()=>{
    return [
      { title: "Sorry seems to be the hardest word", duration: "4:05" },
      { title: "I want this that way", duration: "3:05" },
      { title: "No matter what", duration: "2:05" },
      { title: "Imagine", duration: "5:05" },
      { title: "You're somebody else", duration: "4:05" },
      { title: "Halo", duration: "1:05" }
    ];
}

const selectedSongReducer = (state = null, action) => {
switch (action.type) {
  case 'SONG_SELCTED':
    return action.song;
  default:
    return state;
}



};