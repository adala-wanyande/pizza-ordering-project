import React from "react";
import NavigationBar from "./NavigationBar";
import CarouselContainer from "./CarouselContainer";
import gallery from "./CarouselImages";
import { Button } from "react-bootstrap";

function Home() {
  return (
    <div className="">
      <NavigationBar active="Home"></NavigationBar>
      <div className="main-cont">
        Carousel here:
        <CarouselContainer>
          {gallery.map((image, index) => {
            console.log("image", image);
            return <img key={index} src={image.url} alt={image.alt} />;
            // <span className="slides" key={index}>

            //   <h2 className="slide-title">{image.title}</h2>
            //   <h5 className="slide-text">{image.description}</h5>
            // </span>
          })}
        </CarouselContainer>
        <div className="Call_to_action">
          <p>
            The homemade pizza dough is produced in-house daily and is another
            reason why the pizza at Pizza Inn always tastes better. The Twisty
            Bread, the signature Wingz and the delicious Double Meal are
            additional value-for-money options that keep our satisfied customers
            coming back time after time. These are the meals that have made our
            Terrific Tuesday everyone’s favorite day of the week. When
            entertaining, a Hawaiian pizza, a Regina pizza, or a Peri Peri
            Chicken pizza from Pizza Inn is the obvious and perfect option to
            please crowds of all ages.
          </p>
        </div>
      </div>

      <div>
        <span
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-",
          }}
        >
          {" "}
          <p>For same delivery order by 11 am</p>
          <Button variant="Primary"> Order Now!</Button>
        </span>
      </div>
    </div>
  );
}

export default Home;
