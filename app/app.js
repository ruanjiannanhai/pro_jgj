/**
 * Created by lilei on 16-6-14.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {
    Router,
    Route,
    Link,
    hashHistory,
    browserHistory,
    IndexRoute,
} from 'react-router';

import {
    Container,
    Group,
    NavBar,
    TabBar,
    View,
} from 'amazeui-touch';

import Blog from './module/blog'
import Detail from './module/BlogDetail'

// var Blog = require('./module/blog');


var App = React.createClass({
    render: function () {
        let {
            location,
            params,
            children,
            ...props
        } = this.props;

        let transition = children.props.transition || 'rfl';

        return (
            <Container direction="column" id="sk-container">

                <Container transition='sfr'>
                    {React.cloneElement(children, {key: location.key})}
                </Container>
            </Container>
        )

    }
});

const Index = () => (
    <div>
        <h2>Index!</h2>
        <Link to="/blog">blog</Link>
    </div>
)


ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={Detail}/>
        </Route>
    </Router>,
    document.getElementById('root')
);