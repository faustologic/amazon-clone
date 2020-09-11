import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
                />
                <div className="home__row">
                    <Product
                    id={1237949} 
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    price={29.99}
                    rating={3}
                    />
                    <Product 
                    id={4559903}
                    title="8Bitdo Sn30 Pro+ Bluetooth Gamepad (Sn Edition) - Nintendo Switch"
                    image="https://images-na.ssl-images-amazon.com/images/I/41aV6wQdNgL._AC_SY200_.jpg"
                    price={49.99}
                    rating={5}
                    />
                    <Product 
                    id={45440055}
                    title="Apple Magic Bluetooth Wireless Laser Mouse - A1296 (Renewed)"
                    image="https://m.media-amazon.com/images/I/41teXV9y1dL._AC_UY218_.jpg"
                    price={83.99}
                    rating={4}
                    />
                </div>
                <div className="home__row">
                <Product 
                    id={7700000}
                    title="Super Mario 3D All-Stars - Nintendo Switch"
                    image="https://m.media-amazon.com/images/I/51Hq9iXWvSL._SS135_.jpg"
                    price={59.99}
                    rating={5}
                    />
                    <Product 
                    id={189036}
                    title="Bose SoundLink Micro, Portable Outdoor Speaker, (Wireless Bluetooth Connectivity), Bright Orange"
                    image="https://m.media-amazon.com/images/I/41LhnhBTfXL._SS135_.jpg"
                    price={29.99}
                    rating={5}
                    />
                    <Product
                    id={99000222} 
                    title="Seiko Men's SNK809K Automatic Stainless Steel Watch"
                    image="https://images-na.ssl-images-amazon.com/images/I/41x1Ukt0XnL._AC_SY200_.jpg"
                    price={29.99}
                    rating={3}
                    />
                    <Product 
                    id={4559906}
                    title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
                    image="https://images-na.ssl-images-amazon.com/images/I/41kaOFDXzSL._AC_SY200_.jpg"
                    price={64.99}
                    rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={222999333}
                        title="Alienware M15-15.6 FHD Gaming Laptop Thin and Light, i7-8750H Processor, NVIDIA GeForce Graphics Card, 16GB RAM, 1TB Hybrid HDD + 128GB SSD, 17.9mm Thick & 4.78lbs"
                        image="https://images-na.ssl-images-amazon.com/images/I/510a96rEUEL._AC_SY200_.jpg"
                        price={1349.99}
                        rating={4}
                    />
                    <Product 
                    id={45596785}
                    title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
                    image="https://images-na.ssl-images-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg"
                    price={44.98}
                    rating={2}
                    />
                    <Product 
                    id={4559903}
                    title="8Bitdo Sn30 Pro+ Bluetooth Gamepad (Sn Edition) - Nintendo Switch"
                    image="https://images-na.ssl-images-amazon.com/images/I/41aV6wQdNgL._AC_SY200_.jpg"
                    price={49.99}
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
