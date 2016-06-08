/**
 * Created by lilei on 16-6-1.
 */
var React = require('react');
var ReactDom = require('react-dom');
var Returner = require('../components/returner');
var Tabs = require('../components/tabs');
var TabContent = require('../components/tabContent');

var Friends = React.createClass({
    render: function () {
        return (
            <div className="page page-current">
                <header className="bar bar-nav">
                    <Returner url="/"/>
                    <h1 className="title">交朋友</h1>
                </header>
                <div className="content">

                    <Tabs>
                        <Tabs.Item eventKey="1" title="全部">
                            1111111111
                        </Tabs.Item>
                        <Tabs.Item eventKey="2" title="老乡">
                            2222222222
                        </Tabs.Item>
                        <Tabs.Item eventKey="3" title="同行" disabled>
                            3333333333
                        </Tabs.Item>
                    </Tabs>

                </div>

            </div>
        );
    }

});

ReactDom.render(
    <Friends />,
    document.getElementById('root')
);