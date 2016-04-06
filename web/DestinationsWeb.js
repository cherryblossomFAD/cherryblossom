var Destinations = React.createClass({
  render: function() {
    var createDestination = function(destination) {
      return (
        <li className="list-group-item">
        <div className="media">
          <div className="media-left">
              <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{ destination.title }</h4>
            { destination.address }
          </div>
        </div>
        </li>
      );
    };

    return <ul className="list-group">{ this.props.list.map(createDestination) }</ul>
  }
});

var DestinationsWeb = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      list: []
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://cherryblossoms.firebaseio.com/');
    this.bindAsArray(firebaseRef, "list");
  },

  render: function() {
    return (
      <div className="destinationsWeb">
        <Destinations list={ this.state.list }/>
      </div>
    );
  }
});

ReactDOM.render(<DestinationsWeb />, document.getElementById('DestinationsWeb'));
