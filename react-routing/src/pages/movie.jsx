import React from "react";
import { useParams } from "react-router";

function MovieComponent() {
  const { id } = useParams();

  return <div className="page-component">Movie {id}</div>;
}

export default MovieComponent;
