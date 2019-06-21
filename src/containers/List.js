// External
import React from "react";
import { connect } from "react-redux";

// Internal
import ListItem from "./components/ListItem";

// Get only the necessary part of the state and map it as a prop
const mapStateToProps = state => (
  { articles: state.articles }
);

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <ListItem element={el} />
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;