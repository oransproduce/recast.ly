// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
//let vidlist = <VideoList list={exampleVideoData}/>;
// debugger;
ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));
