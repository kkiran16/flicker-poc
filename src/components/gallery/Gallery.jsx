import React from "react";

import { useSearchProvider } from "../search/SearchContext";
import Image from "./Image";
import Loader from "../loader/Loader";
import "./Gallery.scss";

function Gallery() {
  const { loading, images } = useSearchProvider();

  let imageList = [];
  if (images && images.length > 0) {
    imageList = images.map((image) => {
      const { farm, server, id, secret, title } = image;
      const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  }

  return (
    <div className="gallery-container">
      {loading ? (
        <Loader />
      ) : (
        <div className="images-container">
          <div className="images-grid">{imageList}</div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
