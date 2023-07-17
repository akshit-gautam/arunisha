import React from "react";
import './navbar.css';
import img1 from '../../images/Image 1.jpg';
import FontAwesome from 'react-fontawesome';

import banner from '../../images/banner.jpg';


export const Navbar = () => {
    const data = [
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
        {
            img: img1, name: "Clove", price: 500
        },
    ]
    return (
        <div className="navbar">
            <div className="nav-1">
            </div>
            <ul className="nav-menu">
                <li>
                    <div>
                        <span>
                            order now
                        </span><br />
                        <a className="black" href="https://api.whatsapp.com/send/?phone=%2B91999013396&text&type=phone_number&app_absent=0" target="_blank">
                            999013396&nbsp;
                            <FontAwesome className="fa-brand fa-whatsapp">

                            </FontAwesome>
                        </a>
                    </div>
                </li>

                <li className="nav-items">
                    <a href="#" className="nav-links">shop</a>
                </li>
                <li className="nav-items">
                    <a href="#" className="nav-links">story</a>
                </li>
                <li className="nav-items">
                    <a href="#" className="nav-links">offers</a>
                </li>
                <li className="nav-items">
                    <img src={banner} alt="" className="ss" />
                </li>
                <li className="nav-items">
                    <a href="#" className="nav-links">blogs</a>
                </li>
                <li className="nav-items">
                    <a href="#contact-1" className="nav-links">contact</a>
                </li>
            </ul>


            <div className="three-section">
                {/* <img src={Web} alt="" className="image-section" /> */}
                {/* <img src={Layer} alt="" className="first" />  */}
            </div>

            <div className="content">
                <div className="text-center red-color poppins size line">
                    Top Picks
                </div>
                <div className="text-center green-color captialize size-1 line">
                    pick the best from our range
                </div>
            </div>

            {/* box make here*/}

            <div className="box">
                {
                    data.map(item => {
                        return <Card img={item.img} name={item.name} price={item.price} />
                    })
                }
            </div>
            <div className="content-2">
                <div className="text-center red-color poppins size line">
                    Offers
                </div>
                <div className="text-center green-color captialize size-1 line">
                    delicious deals & combos
                </div>
            </div>
            <div className="three">
            </div>
            <div id="contact-1">
                <div className="text-center  red-color poppins  size line">
                    Contact Us
                </div>
                <div className="text-center green-color captialize size-1 line">
                    Feel free to contact

                </div>
            </div>

        </div>
    )
}
export default Navbar;



const Card = ({ img, name, price }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={img} alt="" />
            </div>

            <div className="text-center semi-bold">
                {name}
            </div>
            <div className="text-center green-color">
                INR {price}
            </div>

        </div>
    )
}

