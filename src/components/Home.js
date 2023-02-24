import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import CarouselContainer from "./CarouselContainer";
import gallery from "./CarouselImages";
import { Card, CardGroup, CardImg } from "react-bootstrap";
import bbqSteak from "../images/bbq-steak.jpg";
import boewors from "../images/boewors.jpg";
import chickenMush from "../images/chicken-mushroom.jpg";
import tikka from "../images/veg-tikka.jpg";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="main-home">
      <NavigationBar active="Home"></NavigationBar>
      <div className="main-cont">
        {/* Carousel here: */}
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
        <CardGroup>
          <Card>
            <CardImg variant="top" src={bbqSteak} alt="steak pizza" />
            <Card.Title>
              Barbeque Steak pizza
              <span
                style={{ padding: "5px", height: "5px" }}
                onClick={() => setCount(count + 1)}
              >
                <FcLike />
              </span>
            </Card.Title>

            <Card.Body
              style={{
                marginBottom: "10px",
                height: "30px",
                fontSize: "14px",
                justifyItems: "center",
              }}
            >
              <Card.Text>
                {/* Marinated BBQ Steak */}
                {count}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={boewors} alt="steak pizza" />
            <Card.Title>
              Boewors pizza
              <span
                style={{ padding: "5px", height: "5px" }}
                onClick={() => setCount(count + 1)}
              >
                <FcLike />
              </span>
            </Card.Title>
            <Card.Body
              style={{
                marginBottom: "10px",
                height: "30px",
                fontSize: "14px",
                justifyItems: "center",
              }}
            >
              <Card.Text>
                {/* 100% Beef Mince */}
                {count}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={chickenMush} alt="steak pizza" />
            <Card.Title>
              Chicken Mushroom pizza
              <span
                style={{ padding: "5px", height: "5px" }}
                onClick={() => setCount(count + 1)}
              >
                <FcLike />
              </span>
            </Card.Title>
            <Card.Body
              style={{
                marginBottom: "10px",
                height: "30px",
                fontSize: "14px",
                justifyItems: "center",
              }}
            >
              <Card.Text>
                {/* Succulent Chicken - CreamyMushroom */}
                {count}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={tikka} alt="steak pizza" />
            <Card.Title>
              Chicken-Tikka pizza
              <span
                style={{ padding: "5px", height: "5px" }}
                onClick={() => handleClick()}
              >
                <FcLike />
              </span>
            </Card.Title>
            <Card.Body
              style={{
                marginBottom: "10px",
                height: "30px",
                fontSize: "14px",
                justifyItems: "center",
              }}
            >
              <Card.Text>{count}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
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
    </div>
  );
}

export default Home;
