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
                <div className="post-container">
                    <div className="buttons-container">
                        <Link to="/posts" className="btn btn-submit">Back your posts</Link>
                        <button className="btn btn-cancel"
                                onClick={e => this.onClickDeleteHandler(e)}>
                            Delete post
                        </button>
                    </div>
                    <div className="content-container">
                        <h3 className="content-container__title">{post.title}</h3>
                        <h6 className="content-container__category">Categories: {post.categories}</h6>
                        <p className="content-container__content">{post.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps({ posts }, ownProps) {
    return {post: posts[ownProps.match.params.id] };
}

export default connect (mapStateToProps, { fetchSinglePost, deletePost }) (PostDisplay);