var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyPress={(event) => props.cb2(event)}/> {/*onKeyPress must pass in the key from the keyboard that was clicked into anonymous function*/}
    <button className="btn hidden-sm-down" onClick={() => props.cb($('.form-control').val())}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
  );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
