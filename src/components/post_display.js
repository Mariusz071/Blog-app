import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from "../actions";

class PostDisplay extends Component {

    componentDidMount() {
        //prop provided by react-router
        const { id } = this.props.match.params;
        this.props.fetchSinglePost(id);
    }

    onClickDeleteHandler(e) {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/posts");
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading post...</div>
        }

        return (
            <div className="main-container">
                <Link to="/" className="btn btn-warning">Back to main page</Link>
                <button className="btn btn-danger"
                        onClick={e => this.onClickDeleteHandler(e)}>
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}


function mapStateToProps({ posts }, ownProps) {
    return {post: posts[ownProps.match.params.id] };
}

export default connect (mapStateToProps, { fetchSinglePost, deletePost }) (PostDisplay);