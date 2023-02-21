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
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Business</h4>
                        <a href="employer">
                            <p>Employer</p>
                        </a>
                        <a href="healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="individual">
                            <p>Individual</p>
                        </a>

                    </div>
                    <div className="sb_fotter-links_div">
                        <h4>Resources</h4>
                        <a href="resources">
                            <p>Resource center</p>
                        </a>
                        <a href="resources">
                            <p>Testimonials</p>
                        </a>
                        <a href="resources">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Partners</h4>
                        <a href="employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="about">
                            <p>About</p>
                        </a>
                        <a href="press">
                            <p>Press</p>
                        </a>
                        <a href="career">
                            <p>Career</p>
                        </a>
                        <a href="contact">
                            <p>Contact</p>
                        </a>

                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Find us on </h4>
                        <div className="socialmedia">
                            <p>
                                <img src={fb} alt="" />
                            </p>
                            <p>
                                <img src={twitter} alt="" />
                            </p>
                            <p>
                                <img src={linkedin} alt="" />
                            </p>
                            <p>
                                <img src={insta} alt="" />
                            </p>
                            <p>
                                <img src={whatsapp} alt="" />
                            </p>
                            <p>
                                <img src={youtube} alt="" />
                            </p>
                        </div>
                    </div>

                </div>

                <hr></hr>

                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} CodeInn. All right reserved.
                        </p>
                    </div>
                    <div className="sb_footer-below-links">
                        <a href="terms"> <div><p>Terms &Conditions</p></div></a>
                        <a href="terms"> <div><p>Privacy</p></div></a>
                        <a href="terms"> <div><p>Security</p></div></a>
                        <a href="terms"> <div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Footer;