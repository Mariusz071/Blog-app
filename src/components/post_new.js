import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field name="title"  component={this.renderField} label="Title"/>
                <Field name="categories"  component={this.renderField} label="Categories"/>
                <Field name="content"  component={this.renderField} label="Post Content"/>
                <button type="submit" className='btn btn-secondary'>Submit your post</button>
            </form>
        )
    }
}

function validate(values) {
    // values contains object with values from all inputs
    // { title: 'sometitle', categories: 'somecategories', content: 'somecontent' }
    const errors = {};

    // Validate inputs from 'values'
    if(!values.title || values.title.length < 3) {
        errors.title = 'Enter a valid title! (must be longer than 3 characters)'
    }

    if(!values.categories || values.categories.length < 3) {
        errors.categories = 'Enter a valid category! (must be longer than 3 characters)'
    }

    if(!values.content || values.content.length < 6) {
        errors.content = 'Enter some content! (at least 6 characters)'
    }

    // if errors object is empty, form will be submitted
    // if errors has any properties redux form will be invalid
    console.log(errors);
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)