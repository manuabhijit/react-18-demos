import React from "react";

function DisplayComponent({ showTitle }) {
  return (
    <div className="component">
      {showTitle && (
        <h1 className="title" data-testid="title-text">
          Display Component
        </h1>
      )}
    </div>
  );
}

export default DisplayComponent;
