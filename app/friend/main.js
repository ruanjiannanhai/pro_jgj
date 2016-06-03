/**
 * Created by lilei on 16-6-1.
 */

var Returner = require('../components/returner');
var Tab = require('../components/tab');
var TabContent = require('../components/tabContent');

var Friends = React.createClass({
    render: function () {
        return (
            <div className="page page-current">
                <header className="bar bar-nav">
                    <Returner url="/"/>
                    <h1 className="title">交朋友</h1>
                </header>

                <div className="content native-scroll">
                    <div className="buttons-tab fixed-tab">
                        { this.renderTabs()}
                    </div>

                    <div className="tabs">
                        {this.renderTabContents()}
                    </div>
                </div>
            </div>
        );
    }

    , getInitialState: function () {
        return {items: []};
    }

    , changeListType: function (link) {
        console.log(link);
    }

    , renderTabs: function () {
        var tabs = [];
        this.dataTemplate.forEach(function (item, i){
            var boundClick = this.changeListType;
            tabs.push(<Tab onClick={boundClick}
                           active={item.active}
                           key={i}
                           link={item.link}
                           name={item.name}
                           />)
        }, this);

        return tabs;
    }

    , renderTabContents: function () {
        var content = [];
        this.dataTemplate.forEach(function (item, i) {
            content.push(<TabContent key = {i} id={item.link} value={item.name} active={item.active}/>)
        })
        return content;
    }

    , dataTemplate: [{name: "全部", link: "#all", active:true},
        {name: "老乡", link: "#town", active:false},
        {name: "同行", link: "#colleague", active:false}]
});

ReactDOM.render(
    <Friends ur/>,
    document.getElementById('root')
);