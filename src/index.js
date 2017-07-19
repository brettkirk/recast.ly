// TODO: Render the `App` component to the DOM


console.log(window.exampleVideoData);
ReactDOM.render(<window.App />, document.getElementById('app'));
ReactDOM.render(<window.VideoList videos={window.exampleVideoData}/>, document.getElementsByClassName('col-md-5')[0]);
ReactDOM.render(<window.VideoPlayer video={window.exampleVideoData[0]}/>, document.getElementsByClassName('col-md-7')[0]);
//console.log(document.getElementsByClassName('col-md-6'));
ReactDOM.render(<window.Search />, document.getElementsByClassName('col-md-6')[0]);
// ReactDOM.render(<window.VideoListEntry video={window.exampleVideoData[0]}/>, document.getElementsByClassName('video-list')[0]);
// ReactDOM.render(<window.VideoListEntry video={window.exampleVideoData[1]}/>, document.getElementsByClassName('video-list')[0]);