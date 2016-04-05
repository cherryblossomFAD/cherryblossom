var Destinations = React.createClass({
  render: function() {
    var createDestination = function(destination) {
      return (
        <li>
          { destination.title } <br /> {destination.address }
        </li>
      );
    };
    return <ul>{ this.props.list.map(createDestination) }</ul>;
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
