/**
 * Created by lilei on 16-6-1.
 */
// var React = require('react');
var Returner = React.createClass({
    render: function () {
        return (<a href={this.props.url} className="button button-link button-nav pull-left back">
            <span className="icon icon-left"/>返回
        </a>);
    }
});

module.exports = Returner;