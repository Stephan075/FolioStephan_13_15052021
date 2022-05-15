import React, { useEffect } from "react";
import Features from "../../components/Features/Features";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

function Home({ PageName }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);
  return (
    <main>
      <HeroBanner />
      <Features />
    </main>
  );
}

export default Home;
