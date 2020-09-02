import React from "react";

import propTypes from "prop-types";

export default function Card(props) {
  const className = ["tiles-item"];
  className.push(props.className);
  if (props.hasShadow) className.push("has-shadow");

  return (
    <div className={className.join(" ")}>
      <div className={`tiles-item-inner`}>{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  hasShadow: propTypes.bool,
  className: propTypes.string,
};
