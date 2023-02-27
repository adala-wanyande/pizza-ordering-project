import React from "react";
import NavigationBar from './NavigationBar'

const About = () => {
  return (
    <>
      <NavigationBar active="About"></NavigationBar>
      <>
        <div className="about frame">
          <div style={{ backgroundColor: "white", height: "auto", margin: "40px 100px 40px 100px" , borderRadius: "5px"  }}>
            <h1 style={{ paddingLeft:"30px", marginTop:"10px", color: "#A6B49A"}}>About Us</h1>
            <h2 style={{ paddingLeft:"30px", fontSize: "32px" }}>Our branches</h2>
            <div className="text-muted" style={{ padding: "10px 30px 10px 30px", lineHeight:"1.8" }}><small>
            <p>Welcome to Rose's Gourmet Pizza Restaurant, a fully fledged restaurant specializing in delivering a relaxed and memorable dining experience. We're currently in 12 locations; 4 in Nairobi and 8 in Kampala.</p>
            <p>We're growing and may soon open a location closer to you. We look forward to serving you.</p>
            <p>Rose's Gourmet Pizza Restaurant is part of <a href="https://github.com/benard-dev">©benard-dev</a> group of companies, the parent company to many other companies.</p>
            </small></div>
          </div>
        </div>
      </>
    </>
  );
}

export default About