/**
 * Created by lilei on 16-6-2.
 */
// var React = require('react');
module.exports = React.createClass({
    
    render:function () {
        return(

            <div className={this.props.active?"tab active":"tab"}>{this.props.value}</div>
        )
    }
});