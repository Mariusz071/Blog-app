import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost} from "../actions";

class PostDisplay extends Component {
    componentDidMount() {
        //prop provided by react-router
        const { id } = this.props.match.params;
        this.props.fetchSinglePost(id);
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading post...</div>
        }

        return (
            <div>
                <Link to="/" className="btn btn-warning">Back to main page</Link>
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

export default connect (mapStateToProps, { fetchSinglePost }) (PostDisplay);