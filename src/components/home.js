import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class HomePage extends Component {
render () {
    return (
            <div className="home">
                <Typography variant="r" className="home__heading">
                    Welcome to BlogSimple App, feel free to play around after logging in.
                </Typography>
            </div>
        )
    }
}