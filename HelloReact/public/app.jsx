var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message
    return (
      <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
      </div>

    );
  }
});

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
      // prevent browser refresh
      e.preventDefault();

      var updates = {};
      var name = this.refs.name.value;
      var message = this.refs.message.value;

      if (name.length > 0) {
        this.refs.name.value = '';
        updates.name = name;
      }

      if (message.length > 0) {
        this.refs.message.value = "";
        updates.message = message;
      }

      this.props.onNewData(updates);
    },
    render: function () {
      return (
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="name" placeholder="Enter name"/>
          </div>
          <div>
            <textarea type="text" ref="message" placeholder="Enter message"/>
          </div>
          <div>
            <button>Submit</button>
          </div>
    
        </form>
      );
    }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is a component'
    };
  },
  handleNewData: function (updates) {
      this.setState(updates);
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Jay';
// var messageOutput = 'Wow man you are a legend'

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById('app')
);
