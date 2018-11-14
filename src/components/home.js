import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class HomePage extends Component {
render () {
    return (
            <Typography variant="inherit" className="home__heading">
                Welcome to  <span className="home__heading-span">BlogSimple</span> App, feel free to play around after logging in.
            </Typography>
        )
    }
}