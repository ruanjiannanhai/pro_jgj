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

import axios from 'axios'

import BlogList from '../components/BlogList'


const albums = [
    {
        title: '全部',
        url: '/api/getmsgs'
    },
    {
        title: '老乡',
        url: '/api/getmsgs'
    },
    {
        title: '同行',
        url: '/api/getmsgs'
    }
]


var Blog = React.createClass({

    render () {
        let backNav = {
            component: Link,
            icon: 'left-nav',
            title: '返回',
            to: '/'
        };
        return (
            <View id="sk-detail">
                <NavBar
                    title="交朋友"
                    leftNav={[backNav]}
                >

                </NavBar>
                <Tabs defaultActiveKey={0}>
                    {
                        albums.map((ablum, i) => {
                            return (
                                <Tabs.Item
                                    title={ablum.title}
                                    key={i}
                                >

                                    <BlogList url = {ablum.url} index = {i} />

                                </Tabs.Item>
                            )
                        })
                    }
                </Tabs>
            </View>
        )
    }

    , getInitialState(){
        return {}
    }

    , getBlogItem(i){
        axios.get(albums[i].url)
            .then(function (response) {
                var data = response.data;
                this.renderBlogItem(data)
            }.bind(this))
            .catch(function (response) {
                console.log(response);
            });
    }

    , renderBlogItem(data){
        if (!data.values.length) return;

        data.values.map((item,i) => {

            return (
                <li>
                    {item.text}
                </li>
            )
        })
    }
});

export default Blog;