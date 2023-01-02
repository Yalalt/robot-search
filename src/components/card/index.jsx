import React from "react";
import "./style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.element.id}?set=set2&size=100x100`}
      alt=""
    />
    <h4>{props.element.name}</h4>
    <h5>{props.element.phone}</h5>
    <p>{props.element.email}</p>
  </div>
);
