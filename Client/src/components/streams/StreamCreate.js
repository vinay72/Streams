import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export class StreamCreate extends Component {
    renderError({ error, touched }){
        if( touched && error){
            return(
               <div className="ui error message">
                   <div className="header">
                       {error}
                   </div>
               </div>
            );
        }
    }
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error':  ''}`;
        return (
            <div className={className}>
                <label>
                 {label}
                </label>
            <input {...input} autoComplete="off"/>
            {this.renderError(meta)}
            </div>
            // we can also do like this using the traditional syntax
            // <input 
            //     onChange={formProps.input.onChange} 
            //     value={formProps.input.value}
            // />
        );
    }
    onSubmit(formValues){
        console.log(formValues);
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
            
        );  
    }
}

const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        // only ran if the user did not enter a title
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        // only ran if the user did not enter a description
        errors.description = 'You must enter a description';
    }
    return errors;
};

export default reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);
