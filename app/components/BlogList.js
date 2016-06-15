/**
 * Created by lilei on 16-6-14.
 */
import React from 'react'
import axios from 'axios'
import {
    Link,
} from 'react-router';

export default React.createClass({
    render(){
        let id = 'wrapper' + this.props.index;

        return (
            <div id={id}>
                <ul>
                    {
                        this.state.data.map((msg, i) => {

                            var path='/blog/'+msg.msid;
                            return (
                                <li key={i}>
                                    <Link to={path}>{msg.text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    , getInitialState(){
        return {data: []}
    }

    , componentDidMount(){
        axios.get(this.props.url)
            .then(function (response) {
                var data = response.data;

                if (data.values.length)
                    this.setState({data: data.values})

            }.bind(this))
            .catch(function (response) {
                console.log(response);
            });
    }
})