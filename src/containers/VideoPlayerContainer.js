import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.
const mapStateToProps = (state, ownProps) => {  
  return {
    video: state.currentVideo
  };
};

const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;
