import React, { useEffect } from "react";
import Features from "../../components/Features/Features";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import featureList from "../../mocks/content";

function Home({ PageName }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);
  return (
    <main>
      <HeroBanner />

      <section className="features">
        {featureList.map((item, i) => (
          <Features
            key={i}
            images={item.images}
            alt={item.alt}
            featureTitle={item.featureTitle}
            featureParagraphe={item.featureParagraphe}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
