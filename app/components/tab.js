/**
 * Created by lilei on 16-6-1.
 */

module.exports = React.createClass({
    render:function () {
        return (
            <a href={this.props.link}
               className={this.props.active ? 'tab-link button active':'tab-link button'}
               onClick = {this.activeItem}>
            {this.props.name}</a>
        )
    }

    ,activeItem:function (e) {
        var $dom = $(e.target);
        $dom.parent().find('.active').removeClass('active');
        $dom.addClass('active');
        this.props.onClick($dom.attr('href'));
    }
});