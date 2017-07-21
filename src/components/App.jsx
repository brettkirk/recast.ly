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

  onKey (event) {
    //if (event.charCode === 13) { //'enter' key has a number of 13
    setTimeout(() => this.onSearchSubmit($('.form-control').val()), 750);
    //}
  }
  
  setSearchState (data) {
    this.setState({ //change states of App, change videoCollection and currentVideo
      videoCollection: data.items, //where array of object videos is stored after pulling from api
      currentVideo: data.items[0]
    });
  }

  componentDidMount() { //built-in React method/life-cycle hook that runs only once the view/component is done rendering
    this.onSearchSubmit('Hack Reactor'); //will display data from Youtube Server initially once component is rendered
  }

  onSearchSubmit (input) {
    var context = this; //saving this value here ('app') bc when we enter ajax call, 'this' now becomes API url
    $.ajax ({ 
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET', //default
      data: { //specifications below are specific to google's API, read documentation for more info
        key: window.YOUTUBE_API_KEY,
        q: input,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      contentType: 'application/json',
      success: function(data) {
        context.setSearchState(data);
      },

      error: function() {
        console.log('Data not retrieved');
      } 
    });

    //$('.form-control').val(''); //clears search after query

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <window.Search cb={this.onSearchSubmit.bind(this)} cb2={this.onKey.bind(this)}/> {/*properties passed in here 'cb' and 'cb2' are actually properties of 'props' property of component*/}
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <window.VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <window.VideoList cb={this.onTitleClick.bind(this)} videos={this.state.videoCollection}/>
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
