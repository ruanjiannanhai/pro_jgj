/**
 * Created by lilei on 16-6-12.
 */
var Blogs = React.createClass({

    propTypes:{
        url:React.propTypes.string.isRequired
    }

    ,render:function () {
        return (
            <div></div>
        )
    }

    ,getData:function () {
        $.ajax({
            url:this.props.url
        })
    }
})