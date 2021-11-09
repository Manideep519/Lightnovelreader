import React from "react";
import AllNovelList from "../AllNovelList/AllNovelList";
import Page from "../Page";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <Page>
      <section className="container box-shadow p-4 mx-auto my-5 border">
        <h4>Hey there!</h4>
        <p style={{ lineHeight: 1.8, fontSize: "18px", fontWeight: 500 }}>
          This site is a part of presonal project development, all the original works belong to the respective authors and translators. This web app is built using react and react-bootstrap, and the data comes from this
          <a target="blank" href="https://github.com/Manideep519/LightNovelScraper-API">
            {" "}
            API{" "}
          </a>
          .The data is fetched(scraped) from the source on every API request, so be patient as it gets the latest data from the source site.
          <br />
          Project link : <a href="https://github.com/Manideep519/Lightnovelreader">github/Lightnovelreader</a>
        </p>
      </section>
      <Slider />
      <AllNovelList />
    </Page>
  );
};

export default Home;
