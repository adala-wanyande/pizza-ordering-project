import React from "react";
import NavigationBar from './NavigationBar'
import './About.css';
import Footer from "../footer/footer";


const About = () => {
  return (
    <>
      <NavigationBar active="About"></NavigationBar>
      <div className="About">
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8474606867426!2d36.82201841483971!3d-1.2640029990780584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f171ff7af4bdd%3A0x9dbde3a5d6365341!2sPizza%20Inn!5e0!3m2!1sen!2ske!4v1676895300677!5m2!1sen!2ske" width="1200" height="400" style={{ border:"0" }} allowfullscreen=""  loading="lazy" referrerpolicy="no-referrer-when-downgrade">Maps</iframe>
        <div className='content'>
          <h2>Freshly made delicious Pizza</h2>
          <p>A Pizza Inn pizza box might be one of the most recognisable icons of Africa. Whichever way you slice it, Pizza Inn is an industry leader in the quick service pizza game. The first Pizza Inn outlet opened its doors in 1994 in Harare, Zimbabwe, and rose quickly in popularity. Serving hot oven-fresh pizza with its signature all-natural tomato sauce and using only the freshest ingredients, Pizza Inn has established itself at the top of the industry and is easily one of the first choices in quick service pizza in Africa.</p>
          <h3>Must be the Pizza!</h3>
          <p>Pizza Inn is known for its variety of pizza options, including its signature thin and crispy crust, as well as its extensive salad bar and dessert menu. In addition to pizza, the restaurant also serves calzones, pasta, sandwiches, and wings.</p>
          <h4>Our Location </h4>
          <p>We are located at Limuru Road Nairobi</p>
          <br/>
          <h5>Browse through some of our videos</h5>
          <br/>
          <div className='videos'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kkKnMs2DyOE" title="Deluxe Thursdays -From pizza inn Kenya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ebudbL38UPA" title="Pizza inn and Chicken inn , Mega Festive Feast." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br/>
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/A5n37-S8gBk" title="Terrific Tuesdays Every Tuesday." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default About