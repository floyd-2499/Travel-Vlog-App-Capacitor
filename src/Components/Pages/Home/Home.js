import React, { useEffect, useState } from "react";
import Header from "../../Head-Foot/Header";
import Footer from "../../Head-Foot/Footer";
import HomePart1 from "./HomePart1";
import HomePartTwo from "./HomePartTwo";
import HomePart3 from "./HomePart3";
import HomePart4 from "./HomePart4";
import HomePart5 from "./HomePart5";
import Loader from "../Loading/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="page-bg">
          <div className="page">
            <Header />
            <br />
            <HomePart1 />
            <HomePartTwo />
            <HomePart3 />
            <HomePart4 />
            <HomePart5 />
            <br />
            <Footer />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
