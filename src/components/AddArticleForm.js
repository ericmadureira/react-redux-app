// External
import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

// Internal
import { addArticle } from "../actions/index";

const mapDispatchToProps = (dispatch) => (
  { addArticle: article => dispatch(addArticle(article))}
);

const ConnectedForm = () => (
  <form>
    <div className="form-group">
      <label>Article</label>
      <div className="input-row">
        <Field name="title" component="input" type="text"/>
        <Field name="id" component="input" type="number"/>
       </div>
       <button type="submit" className="btn btn-success btn-lg">
         Add
       </button>
    </div>
  </form>
);

const AddArticleForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default reduxForm({
  form: 'addArticleForm' // a unique identifier for this form
})(AddArticleForm);