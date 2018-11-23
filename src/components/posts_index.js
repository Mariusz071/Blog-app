import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions";
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import { compose } from "recompose";
import Typography from "@material-ui/core/Typography/Typography";
import classNames from 'classnames';


const styles = theme => ({
    root: {
        verticalAlign: 'center',
        width: '60%',
        height: '50%',
        backgroundColor: theme.palette.background.paper,
        padding: "2rem 0"
    },
    ListItem: {
        padding: "1rem 0",
        textAlign: "center",
    },
    Button: {
        color: "#FFF",
        backgroundColor: "#000",
        outline: "none",
        margin: "1rem auto",
        '&:hover': {
            backgroundColor: "#FCDA02",
            color: "#000"
        },
        '&:active:': {
            outline: "none"
        },
    }
});

function ListItemLink(props) {
    return <ListItem button component={Link} {...props}/>;
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
                <ListItemLink to={`/posts/${post.id}`} className={classes.ListItem} >
                    <ListItemText primary={`${post.title}`}/>
                </ListItemLink>
            )
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="main-container">
                <div className={classNames(classes.root, 'posts-index-container')}>
                    <List component="posts-index" disablePadding={ false }>
                        <Typography variant="h4" color="textPrimary" style={{ marginBottom: "2rem"}}>
                            Current posts
                        </Typography>
                        {this.renderPosts()}
                        <Link to="/posts/new" style={{textDecoration: "none"}}>
                            <Button className={classes.Button}>Add a new post</Button>
                        </Link>
                    </List>
                </div>
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