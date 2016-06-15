/**
 * Created by lilei on 16-6-1.
 */

var React = require('react');
var classNames = require('classnames');

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
            , tabNavWrapper: 'div'
            , tabBodyWrapper: 'div'
            , tabNavWrapperClass: 'buttons-tab'
            , tabNavClass: 'tab-link button'
            , tabBodyWrapperClass: 'tabs'
        }
    }

    , getInitialState: function () {
        var defaultActiveKey = this.props.defaultActiveKey != null
            ? this.props.defaultActiveKey
            : this.getDefaultActiveKey(this.props.children);
        return {
            activeKey: defaultActiveKey
        }
    }

    , getDefaultActiveKey: function (children) {
        var defaultActiveKey = null;
        React.Children.forEach(children, function (child) {
            if (defaultActiveKey == null) {
                defaultActiveKey = child.props.eventKey;
                return null;
            }
        });
        return defaultActiveKey;
    }

    , render: function () {

        return (
            this.renderWrapper(
                [this.renderNavWrapper(this.renderNav()),
                    this.renderBodyWrapper(this.renderTabPanels())]
            )
        )
    }

    , renderWrapper: function (children) {
        var Wrapper = this.props.wrapper;
        return (
            <Wrapper {...this.props}>
                {children}
            </Wrapper>
        )
    }

    , renderNavWrapper: function (children) {
        var TabNavWrapper = this.props.tabNavWrapper;
        return (
            <TabNavWrapper key="tabNavs" className={this.props.tabNavWrapperClass}>
                {children}
            </TabNavWrapper>
        )
    }

    , renderNav: function () {
        return React.Children.map(this.props.children, function (child) {
            var key = child.props.eventKey;

            var navClass = classNames(this.props.tabNavClass,
                { 'active': (child.props.eventKey == this.state.activeKey) });

            return <a href="#"
                      key={key}
                      onClick={this.handleClick.bind(this,key)}
                      className={navClass}
            >{child.props.title}</a>
        }.bind(this))
    }

    , renderBodyWrapper: function (children) {
        var TabBodyWrapper = this.props.tabBodyWrapper;

        return (
            <TabBodyWrapper key="tabBody" className={this.props.tabBodyWrapperClass}>
                {children}
            </TabBodyWrapper>
        )
    }

    , renderTabPanels: function () {
        var activeKey = this.state.activeKey;
        return React.Children.map(this.props.children, function (child, index) {
            return (
                <Tabs.Item
                    active={child.props.eventKey === activeKey}
                    key={index}>
                    {child.props.children}
                </Tabs.Item>
            )
        })
    }


    ,handleClick: function (key,e) {
        e.preventDefault();
        var activeKey = this.state.activeKey;
        if(key != activeKey){
            this.setState({
                activeKey: key
            })
        }
    }


});

Tabs.Item = React.createClass({

    propTypes: {
        title: React.PropTypes.string
        , eventKey: React.PropTypes.any
        , active: React.PropTypes.bool
    }

    , render: function () {
        var itemClass = classNames('tab', {'active':this.props.active});
        return (
            <div className={itemClass}>{this.props.children}</div>
        )
    }
});


module.exports = Tabs;