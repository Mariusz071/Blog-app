import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";
import { Link } from 'react-router-dom';


import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import yellow from "@material-ui/core/colors/yellow";
import { compose } from "recompose";

const theme = createMuiTheme({
    palette: {
        primary: yellow,
    },
    typography: { useNextVariants: true },
});

const styles = theme => ({
    root: {
        minWidth: '60%',
        backgroundColor: 'red',
        padding: "2rem 0"
    },
    ListItem: {
        padding: "1rem 0",
        textAlign: "center",
    },
    heading: {
        color: "white",
        marginBottom: "2rem"
    },
    Button: {
        color: "#000",
        backgroundColor: "#FFF",
        outline: "none",
        margin: "1rem auto",
        '&:hover': {
            backgroundColor: "#FCDA02"
        },
        '&:active:': {
            outline: "none"
        },
        ListItemLink: {
            color: "#FFF",
            textAlign: "center"
        },
        ListItemText: {
            color: yellow
        }
    }
});

function ListItemLink(props) {
    return <ListItem button component="a" {...props}/>;
}

class PostsIndex extends Component {
    componentDidMount() {
        //navigating back to home page
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            const { classes } = this.props;
            return (
                <MuiThemeProvider theme={theme}>
                    <ListItemLink href={`/posts/${post.id}`} className={classes.ListItem} >
                        <ListItemText inset={ true } className={classes.ListItemText} primary={`${post.title}`}/>
                        <Divider/>
                    </ListItemLink>
                </MuiThemeProvider>
            )
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="main-container">
                <MuiThemeProvider theme={theme}>
                    <div className={ classes.root }>
                        <List component="posts-index" disablePadding={ false }>
                            <h2 className={classes.heading}>Current posts</h2>
                            {this.renderPosts()}
                            <Link to="/posts/new" style={ {textDecoration: "none"} }>
                                <Button className={classes.Button}>Add a new post</Button>
                            </Link>
                        </List>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default compose(
    withStyles(styles, { name: 'PostsIndex' }),
    connect(mapStateToProps, { fetchPosts })
)(PostsIndex);