/**
 * Created by lilei on 16-6-1.
 */

var React = require('react');

var Tabs = React.createClass({

    propTypes: {
        onSelect: React.PropTypes.func
        , defaultActiveKey: React.PropTypes.any
        , justify: React.PropTypes.bool
        , data: React.PropTypes.array
    }

    , getDefaultProps: function () {
        return {
            wrapper: 'div'
            ,tabNavWrapper:'div'
            ,tabBodyWrapper:'div'
            ,tabNavWrapperClass:'buttons-tab'
            ,tabNavClass:'tab-link button'
        }
    }

    , getInitialState: function () {
        var defaultActiveKey = this.props.defaultActiveKey != null
            ? this.props.defaultActiveKey
            : this.getDefaultActiveKey(this.props.children);
        return{
            activeKey:defaultActiveKey
        }
    }

    , getDefaultActiveKey: function (children) {
        var defaultActiveKey = null;
        React.Children.forEach(children, function (child) {
            if(defaultActiveKey == null){
                defaultActiveKey = child.props.eventKey;
                return null;
            }
        });
        return defaultActiveKey;
    }

    , render: function () {

        return (
            this.renderWrapper(
                [this.renderNavWrapper( this.renderNav() )]
            )
        )
    }

    ,renderWrapper: function (children) {
        var Wrapper = this.props.wrapper;
        return (
            <Wrapper {...this.props}>
                {children}
            </Wrapper>
        )
    }

    ,renderNavWrapper: function (children) {
        var TabNavWrapper = this.props.tabNavWrapper;
        return (
            <TabNavWrapper key="tabNavs" className={this.props.tabNavWrapperClass}>
                {children}
            </TabNavWrapper>
        )
    }
    
    ,renderNav: function () {
        return React.Children.map(this.props.children, function (child, index) {
            var key = child.props.eventKey;

            return <a href="#"
                    className={this.getClassName(child)}
                    >{child.props.title}</a>
        }.bind(this))
    }

    ,renderBodyWrapper: function (children) {
        var TabBodyWrapper = this.props.tabBodyWrapper;

        return (
            <TabBodyWrapper key="tabBody" className={}>
                {children}
            </TabBodyWrapper>
        )
    }
    
    , getClassName: function (child) {
        var className = this.props.tabNavClass;
        if (child.props.eventKey == this.state.activeKey){
            className = className + ' active';
        }
        return className;
    }


});

Tabs.Item = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired
        , eventKey: React.PropTypes.any
        , active: React.PropTypes.bool
    }

    , render: function () {
        return (
            <div>{this.props.children}</div>
        )
    }
});


module.exports = Tabs;