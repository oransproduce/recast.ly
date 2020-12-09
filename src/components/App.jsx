import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//let vidlist = <VideoList list={exampleVideoData}/>;

class App extends React.Component { //<App videos = {exampleVideoList}/>
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      current: exampleVideoData[0]
    };
  }

  onVideoListEntryClick(movie) {
    this.setState({
      current: movie
    });
  }
  componentDidMount() {
    let options = {
      key: YOUTUBE_API_KEY,
      max: 5,
      query: 'react'
    };

    let temp = [];
    debugger;
    this.props.searchYouTube(options, (data) => temp = temp.concat(data));

    this.setState({
      videoList: temp,
      current: exampleVideoData[0]
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <VideoPlayer video={this.state.current}/>
          <VideoList videos={this.state.videoList} eventHandler={this.onVideoListEntryClick.bind(this)}/>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
