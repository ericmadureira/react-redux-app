// External
import React from "react";
import propTypes from "prop-types";

const ListItem = ({ element }) => (
  <li className="list-group-item" key={element.id}>
    {element.title}
  </li>
);

ListItem.propTypes = {
  element: propTypes.shape({
    title: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }),
};

export default ListItem;