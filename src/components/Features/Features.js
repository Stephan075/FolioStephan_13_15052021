import React from "react";

function Features({ images, alt, featureTitle, featureParagraphe }) {
  return (
    <>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={images} alt={alt} className="feature-icon" />
        <h3 className="feature-item-title">{featureTitle}</h3>
        <p>{featureParagraphe}</p>
      </div>
    </>
  );
}

export default Features;
