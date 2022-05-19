import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Features from "../../components/Features/Features";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import setAuthToken from "../../conf/axios-conf";
import { setUserData } from "../../feature/user.slice";
import callApi from "../../hooks/callApi";
import { featureList } from "../../mocks/content";

function Home({ PageName }) {
  const dispatch = useDispatch();
  // change titre de la page
  useEffect(() => {
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName]);

  useEffect(() => {
    try {
      const getUserInfo = async () => {
        const token = localStorage.getItem("token");

        if (token) {
          setAuthToken(token);
          const userData = await callApi.getCurrentUserData();
          dispatch(setUserData(userData));
        }
      };
      getUserInfo();
    } catch (e) {
      console.log(e);
    }
    document.title = `Argent Bank - ${PageName}`;
  }, [PageName, dispatch]);
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
