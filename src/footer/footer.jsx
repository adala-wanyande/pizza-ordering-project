import React from "react";
import './footer.css';

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
                                <img src="fb" alt="" />
                            </p>
                            <p>
                                <img src="twitter" alt="" />
                            </p>
                            <p>
                                <img src="linkedin" alt="" />
                            </p>
                            <p>
                                <img src="insta" alt="" />
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Footer;