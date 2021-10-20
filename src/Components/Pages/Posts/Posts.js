import React, { useEffect, useState } from "react";
import Header from "../../Head-Foot/Header";
import Footer from "../../Head-Foot/Footer";
import "./post.css";
import "./post-mobile.css";
import images from "./data";
import Loader from "../Loading/Loader";

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const allImages = ["All", ...new Set(images.map((image) => image.category))];
  const allplaces = [
    "All Places",
    ...new Set(images.map((image) => image.place)),
  ];
  const [catList, setCatList] = useState(images);

  const list1 = catList.filter((x) => x.id % 2);
  const list2 = catList.filter((x) => x.id % 2 === 0);

  const categories = allImages;
  const places = allplaces;

  const filter = (category) => {
    if (category === "All") {
      setCatList(images);
      return;
    }

    const filteredImages = images.filter(
      (image) => image.category === category
    );
    setCatList(filteredImages);
  };

  const filterPlace = (place) => {
    if (place === "All Places") {
      setCatList(images);
      return;
    }

    const filteredPlaces = images.filter((image) => image.place === place);
    setCatList(filteredPlaces);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  console.log(catList);

  console.log(list1);
  console.log(list2);

  return (
    <>
      {loading === false ? (
        <div className="page-bg">
          <div className="page">
            <Header />

            <div className="heading">
              <h1>POSTS</h1>
            </div>

            <div className="head2">
              <h1>#TRAVEL #TRAVEL #TRAVEL</h1>
              <p>
                Discover hidden wonders and inspiring destinations around the
                world from the comfort of your own home.
              </p>
            </div>

            <div className="filters">
              <h1>Filter by click ...</h1>
              <div className="category">
                {categories.map((category, index) => {
                  return (
                    <div
                      key={index}
                      className="filter-btn"
                      onClick={() => filter(category)}
                    >
                      {category}
                    </div>
                  );
                })}
              </div>
              <div className="place">
                {places.map((place, index) => {
                  return (
                    <div
                      key={index}
                      className="filter-btn"
                      onClick={() => filterPlace(place)}
                    >
                      {place}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="image-container">
              <div className="lists">
                {list1.map((data) => {
                  return (
                    <div key={data.id} className="image">
                      <img src={data.image} alt={data.place} />
                    </div>
                  );
                })}
              </div>

              <div className="lists">
                {list2.map((data) => {
                 return <div>
                    {data ? (
                    <div key={data.id} className="image">
                      <img src={data.image} alt={data.place} />
                    </div>
                  ) : " "}
                  </div>
                })}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Posts;
