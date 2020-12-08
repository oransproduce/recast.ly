import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

//let vidlist = <VideoList list={exampleVideoData}/>;

class App extends React.Component { //<App videos = {exampleVideoList}/>
  constructor(props) {
    super(props);

    this.state = {
      videoList: this.props.videos,
      current: this.props.videos[0]
    };
  }

  onVideoListEntryClick(title) {
    this.setState({
      current: title
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
          <VideoList videos={this.state.videoList} originalThisBinding={this}/>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
