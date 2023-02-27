import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import CarouselContainer from "./CarouselContainer";
import gallery from "./CarouselImages";
import { Link } from "react-router-dom";
import RateCardCollection from "./RateCardCollection";

function Home() {
  const [faveItems, setFaveItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/favourites")
      .then((response) => response.json())
      .then((faveItems) => setFaveItems(faveItems));
  }, []);

  function handleAddLikes(id) {
    const updateLikes = count + 1;

    fetch(`http://localhost:8000/favourites/${faveItems.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateLikes),
    })
      .then((response) => response.json())
      // .then((data) => setCount(updateLikes));
      .then((data) => console.log("here", data));
  }

  return (
    <>
      <NavigationBar active="Home"></NavigationBar>
      <div className="main-cont">
        <CarouselContainer>
          {gallery.map((image, index) => {
            console.log("image", image);
            return (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                style={{ float: "center" }}
              />
            );
          })}
        </CarouselContainer>
        <div className="about">
          <p style={{ justifyContent: "center" }}>
            Our homemade pizza dough is produced in-house daily and is another
            reason why the pizza at Rose's Gourmet Pizza is simply the best! The
            Twisty bread, the signature Wingz and the delicious Double Meal are
            additional value for money options that keep our customers coming
            back time after time. Our absolute favourites that are a hit on the
            Two's Tuesday include our very own twist of Barbeque Steak pizza,
            Boewors, Chicken Mushroom and the Chicken Tikka. Order today , to
            enjoy the delicious yummy bites!
          </p>
        </div>
      </div>
      <div className="card-group">
        <RateCardCollection
          faveItems={faveItems}
          addLikes={handleAddLikes}
          count={count}
        />
      </div>

      <div className="about">
        <span style={{ fontWeight: "bold", fontSize: "20px", margin: "20px" }}>
          Make order for same day delivery !
        </span>
        <span
          style={{
            fontWeight: "medium ",
            fontStyle: "italic",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          Working hours (8AM - 11PM )
        </span>
        <span>
          <Link to="/order">
            <button
              style={{
                border: "none ",
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                marginTop: "10px",
                left: "10px",
              }}
            >
              Order Now!
            </button>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Home;
