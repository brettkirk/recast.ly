class VideoList extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
    };
  }

  render() {
    return (
      <div className="video-list">
        <div>
          {this.props.videos.map(video => 
            <VideoListEntry cb={this.props.cb} video={video} />
            )}
        </div>
      </div>
    );
  }
} 

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
