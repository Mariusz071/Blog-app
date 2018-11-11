import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";
import PostsNew from "./post_new";
import PostDisplay from "./post_display";
import PostsIndex from "./posts_index";
import HomePage from './home'
import LoginPanel from "./login_panel";

export default class MainContainer extends Component {
    render() {
        return (
            <div className="home-page">
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/posts/:id" component={PostDisplay} />
                    <Route path="/posts" component={PostsIndex} />
                    <Route path="/login" component={LoginPanel} />
                    <Route path ="/" component={HomePage} />
                </Switch>
            </div>

        )
    }
}