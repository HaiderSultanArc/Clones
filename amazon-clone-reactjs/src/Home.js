import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Backgorund Image" />


            <div className="home__row">
                <Product id="12321341" title="Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote" price={129.96} rating={5} image="https://m.media-amazon.com/images/I/81nUym12AOL._AC_UY218_.jpg" />
                <Product id="49538094" title="Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black" price={93.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L._AC_US160_.jpg" />
            </div>

            <div className="home__row">
                <Product id="75206209" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                <Product id="28520682" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
                <Product id="77201942" title="HP 65 | Ink Cartridge | Black | N9K02AN" price={17.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51N+uZrhNNL._AC_US160_.jpg" />
            </div>

            <div className="home__row">
                <Product id="10760237" title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812" price={599.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51-jewl7LsL._AC_US160_.jpg" />
            </div>

        </div>
    )
}

export default Home
