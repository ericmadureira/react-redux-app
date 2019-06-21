// External
import React from "react";
import { Field } from "redux-form";
import { connect } from "react-redux";

// Internal
import { addArticle } from "./actions/index";

const ConnectedForm = () => (
  <form onSubmit={}>
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
)

const AddArticleForm = connect(null, mapDispatchToProps)(ConnectedForm);

export default AddArticleForm;