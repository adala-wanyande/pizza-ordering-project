import React from 'react'
import NavigationBar from './NavigationBar'
import '../index.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <NavigationBar active="Home"></NavigationBar>
      <>
        <div className="frame frame-1">
          <div style={{ width: "550px", marginTop: "5%", marginLeft: "5%"}}>
            <h1 className="h1-frame-1"><span style={{ color: "red" }}>More</span> Than Just Pizza</h1>
            <p className="h2-frame-1">Our menu has something for everyone. Stop by for a quick bite or get your favorites delivered right to your door.</p>
          <div>
          </div>
            <Link to="/order">
              <Button style={{ backgroundColor:"#E48041", borderColor: "#E48041", outlineColor:"#E48041", marginRight: "30px" }}>Order Now</Button>
            </Link>
            <Link to="/menu">
              <Button className = "see-menu-button" style ={{ backgroundColor: "transparent", borderColor: "transparent", outlineColor:"transparent" }}>
                See the Menu
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ paddingLeft: "10px", width: "20px", height: "20px", fill: "white", marginBottom: "2px" }}><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>            </Button>
            </Link>
          </div>
      </div> 
      </>
    </>
  )
}

export default Home