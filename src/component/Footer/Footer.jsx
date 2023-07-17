import React from "react";
import './footer.css';
import ban from '../../images/white.jpg';
import FontAwesome from 'react-fontawesome';


export const Footer = () => {
    return (

        <footer className="main-footer">
            <div className="small-footer">    
            </div>
            <div className="container">
                <div className="footer-about">
                    <div className="logo">
                        <img src={ban} alt="" />
                    </div>
                    <div className="para poppins">
                        
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At id ipsam tenetur praesentium veritatis eos quam laudantium sed error alias, consequuntur molestias.
                    </div>
                </div>

                {/* 2column  */}
                <div className="information">
                    <ul className="tech">
                        <li>
                            <h3 className="heading-1 poppins"> Introduction</h3>
                        </li>
                        <li>
                            New product
                        </li>
                        <li>
                            top seller
                        </li>
                        <li>
                            our blogs
                        </li>
                        <li>
                            about
                        </li>
                    </ul>       
                </div>
                {/* 3column */}
                <div className="links">
                        <ul className="link-1">
                            <li>
                                <h3 className="heading-2 poppins">Links</h3>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/"><FontAwesome className="fa-brands fa-instagram">
                            </FontAwesome>  Instagram
                            </a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/"><FontAwesome className="fa-brands fa-linkedin">
                            </FontAwesome>  Linkedin
                            </a>
                            </li>
                            <li>
                            <a href="https://www.facebook.com/"><FontAwesome className="fa-brands fa-facebook">
                            </FontAwesome>  Facebook
                            </a>
                            </li>
                            <li>
                            <a href="https://www.youtube.com/"><FontAwesome className="fa-brands fa-youtube">
                            </FontAwesome>  Youtube
                            </a>
                            </li>
                        </ul>
                    </div>
            </div>


        </footer>
    );
};

export default Footer;
