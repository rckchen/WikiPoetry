//Quote of the hour
  //changes every hour
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Cartridge = require('./cartridge/Cartridge.react');

var Navbar = React.createClass({

  render: function () {
    var term = this.props.params;
    return (
      <div>
        <ul>
          <li><Link to="/" activeClassName="link-active"><img src="images/wp_logo.jpg"/></Link></li>
          <li><Link to="/" activeClassName="link-active">Home</Link></li>
          <li><Link to={`/Article/${term}`} activeClassName="link-active">Article</Link></li>
          <li><Link to="/HowItWorks" activeClassName="link-active">How It Works</Link></li>
          <li><Link to="/AboutUs" activeClassName="link-active">About Us</Link></li>
        </ul>
        <Cartridge />
      </div>
    );
  }
});

module.exports = Navbar;
