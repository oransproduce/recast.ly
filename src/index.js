// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
import VideoList from './components/VideoList.js';

//let vidlist = <VideoList list={exampleVideoData}/>;
// debugger;
ReactDOM.render(<App videos={exampleVideoData}/>, document.getElementById('app'));
