import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        //work around for input red outline
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;

        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                {/*Property auto added to the field object from validate function
                 meta.touched is fields state when it was selected in and selected out*/}
                 <div className="text-danger">
                    {touched ? error : ''}
                 </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values)
    }

    render() {
        //handleSubmit is taken from reduxForm helper
        const { handleSubmit } = this.props;
        return (
            //if form is valid onSubmit function will run
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
    //name property of field component and errors.name in validate function must be exactly the same
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew)