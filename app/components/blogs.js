/**
 * Created by lilei on 16-6-12.
 */

var React = require('react');
var axios = require('axios');

var Blogs = React.createClass({

    propTypes: {
        url: React.PropTypes.string.isRequired

    }

    , getDefaultProps: function () {
        return {
            component: 'div'
        };
    }

    , getInitialState: function () {
        return {text: '123123123'};
    }

    , render: function () {
        var Component = this.props.component;
        return (
            <Component>{this.state.text}</Component>
        )
    }

    , renderContent: function () {
        return (
            <div>{this.state.text}</div>
        )
    }

    , componentDidMount: function () {
        axios.get(this.props.url)
        .then(function (response) {
            var data = response.data;
            this.setState({text:data.values[0].text})
        }.bind(this))
        .catch(function (response) {
            console.log(response);
        });
    }


})


module.exports = Blogs;