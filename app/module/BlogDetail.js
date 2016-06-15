/**
 * Created by lilei on 16-6-14.
 */
import React from 'react';
import {
    Link,
} from 'react-router';


import {
    NavBar,
    View,
    Tabs,
} from 'amazeui-touch';

export default React.createClass({


    render(){
        let backNav = {
            component: Link,
            icon: 'left-nav',
            title: '返回',
            to: '/blog'
        };
        return (
            <View id="sk-detail">
                <NavBar
                    title="消息详情"
                    leftNav={[backNav]}
                >
                </NavBar>
                <div>
                    asdfjalsdjflaskjdflkjasldfkjlasjdflkjasdkf
                </div>
            </View>
        )

    }
})