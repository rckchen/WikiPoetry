//Components are like Views
//Top level app view
var React = require('react');
var Navbar = require('./Navbar.react');
var Header = require('./Header.react');

var WikiPoetryApp = React.createClass({

  render: function() {
    return (
      <div className="wikiapp">
        <nav className="navbar two columns">
          <Navbar />
        </nav>
        <header className="header ten columns">
          <Header />
        </header>
        {this.props.children}
      </div>
    );
  }
});

module.exports = WikiPoetryApp;
