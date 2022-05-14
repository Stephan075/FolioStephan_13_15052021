import React, { useEffect } from "react";

function Home({ PageName }) {
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);
  return (
    <div>
      <h1>This is the Guest Layout Page</h1>
    </div>
  );
}

export default Home;
