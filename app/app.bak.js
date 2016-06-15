/**
 * Created by lilei on 16-6-13.
 */
var React = require('react');
var ReactDom = require('react-dom');
var browserHistory = require('react-router').browserHistory;
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var IndexLink = require('react-router').IndexLink;
var Redirect = require('react-router').Redirect;


var About = require('./module/about');
var Blog = require('./module/blog');
var ACTIVE = {color: 'red'};
var App = React.createClass({
    render: function () {

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

var Index = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Index!</h2>
                <Link to="/users" activeStyle={ACTIVE}>/users/ryan</Link>
            </div>
        )
    }
});


var Users = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Users</h2>
                <Link to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link>
                {this.props.children}
            </div>
        )
    }
});

var UserIndex = React.createClass({
    render: function () {
        return (
            <div>
                <h2>users IndexLink</h2>
            </div>
        )
    }
});

var User = React.createClass({
    render: function () {
        var id = this.props.params.userId;
        return (
            <div>
                <h3>User {id}</h3>
                <Link to="/about" activeStyle={ACTIVE}>About</Link>
            </div>
        )
    }
});


var About = React.createClass({
    render: function () {
        return (
            <div>
                <h2>About</h2>
                <Link to="/blog" activeStyle={ACTIVE}>Blog</Link>
            </div>
        )
    }
});

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            <Route path="blog" component={Blog}/>
        </Route>
    </Router>,
    document.getElementById('root')
);


