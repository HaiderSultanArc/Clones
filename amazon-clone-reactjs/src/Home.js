import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Backgorund Image" />


            <div className="home__row">
                <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Succenful Buisness Paperback" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
                <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and WH" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg" />
            </div>

            <div className="home__row">
                <Product id="12321341" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
                <Product id="12321341" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$" />
                <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Succenful Buisness Paperback" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
            </div>

            <div className="home__row">
                <Product id="12321341" title="The Lean Startup: How Constant Innovation Creates Radically Succenful Buisness Paperback" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
            </div>

        </div>
    )
}

export default Home
