import React from "react";
import './footer.css';
import fb from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import insta from '../assets/instagram.png';
import whatsapp from '../assets/whatsapp.png';
import youtube from '../assets/youtube.png';

const Footer =()=>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/individual">
                            <p>Individual</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resources</h4>
                        <a href="/resources">
                            <p>Resource center</p>
                        </a>
                        <a href="/resources">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resources">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>About</p>
                        </a>
                        <a href="/Order">
                            <p>Order Today </p>
                        </a>
                        <a href="/Home">
                            <p>Home</p>
                        </a>
                        <a href="/contact">
                            <p>Contact</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Find us on </h4>
                        <div className="socialmedia">
                            <p>
                            <a href="https://www.instagram.com/pizzainn_ke/">
                                <img src={insta} alt=""  height={60} width={1000}  /> 
                                </a>
                            </p>
                            <p><a href="https://www.instagram.com/pizzainn_ke/">
                                <img src={twitter} alt=""  height={60} width={1000}/>
                                </a>
                            </p>
                            <p><a href="https://www.linkedin.com/company/pizza-inn">
                                <img src={linkedin} alt="" height={60} width={1000}/>
                                </a>

                            </p>
                            <p><a href="https://en-gb.facebook.com/PizzaInnKE/">
                                <img src={fb} alt="" height={60} width={1000}/>
                                </a>
                            </p>
                            <p><a href="https://api.whatsapp.com/send/?phone=254711653717&text=Reach+us+on+whatsApp&type=phone_number&app_absent=0">
                                <img src={whatsapp} alt="" height={60} width={1000}/>
                                </a>
                            </p>
                            <p><a href="https://www.youtube.com/watch?v=kkKnMs2DyOE">
                                <img src={youtube} alt="" height={60} width={1000}/>
                                </a>
                            </p>
                        </div>
                    </div>

                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} PizzaInn. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="https://www.pizzainn.com.au/policy"> <div><p>Terms &Conditions</p></div></a>
                        <a href="https://www.pizzainn.com/privacy-policy/"> <div><p>Privacy</p></div></a>
                        <a href="https://www.pizzainn.com.au/policy"> <div><p>Security</p></div></a>
                        <a href="https://pizzainntakeaway.co.uk/cookie-policy"> <div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer;