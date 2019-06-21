// External
import React from "react";

// Internal
import List from "../containers/List";
import AddArticleForm from "./AddArticleForm";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new Article</h2>
      <AddArticleForm />
    </div>
  </div>
);

export default App;