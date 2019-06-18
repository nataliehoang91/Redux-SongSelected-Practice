import React from 'react';
import {connect} from 'react-redux';

class SongDetails extends React.Component {
  render() {

    if (!this.props.song) {
      return <div>Select Song</div>;
    } else {
      return (
        <div>
          <h4>Detail</h4>
          <p>Title: {this.props.song.title}</p>
          <p>Duration: {this.props.song.duration}</p>
        </div>
      );
    }
  }
}

const mapStateToProps=(state)=>{
    console.log(state.selectedSong)
    return {
        song:state.selectedSong
    }
}


export default connect(mapStateToProps)(SongDetails);