class App extends React.Component {
  constructor (props) {
    super(props);
  
    this.state = {
      currentVideo: window.exampleVideoData[0], 
      videoCollection: window.exampleVideoData
    };
  }
    
  onTitleClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <window.Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <window.VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <window.VideoList cb={this.onTitleClick.bind(this)} videos={window.exampleVideoData}/>
          </div>
        </div>
      </div>
    ); 
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

// window.video = window.exampleVideoData[0];