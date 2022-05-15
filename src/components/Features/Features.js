import React from "react";

function Features() {
  const featureItem = [
    {
      images: "./img/icon-chat.png",
      featureTitle: "You are our #1 priority",
      featureParagraphe:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      images: "./img/icon-money.png",
      featureTitle: "More savings means higher rates",
      featureParagraphe:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      images: "./img/icon-security.png",
      featureTitle: "Security you can trust",
      featureParagraphe:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featureItem.map((item, i) => (
        <div key={i} className="feature-item">
          <img src={item.images} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{item.featureTitle}</h3>
          <p>{item.featureParagraphe}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
