/**
 * Created by lilei on 16-6-2.
 */

module.exports = React.createClass({
    render:function () {
        return(

            <div className={this.props.active?"tab active":"tab"}>{this.props.value}</div>
        )
    }
});