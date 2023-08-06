import React from "react";

function Image({ url, title }) {
  return (
    <div className="img-item">
      <img src={url} alt={title} />
    </div>
  );
}

export default Image;
