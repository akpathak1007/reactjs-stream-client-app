import React from 'react';
import { Field, reduxForm, touch } from "redux-form";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return <div className="text-danger">{error}</div>;
    }
  };
  RenderInput = ({ input, label, meta }) => {
    return (
      <div className=" my-3">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <input className="form-control" id={label} {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="container needs-validation"
      >
        <Field name="title" component={this.RenderInput} label="Title" />
        <Field
          name="description"
          component={this.RenderInput}
          label="Description"
        />
        <button className="btn btn-primary">Create Stream</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "Please enter title!";
  }
  if (!formValues.description) {
    error.description = "Please enter description!";
  }
  return error;
};
export default reduxForm({
  form: "createStream",
  validate,
})(StreamCreate);