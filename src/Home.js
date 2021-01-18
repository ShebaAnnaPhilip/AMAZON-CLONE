import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home_row">
          <Product
            id="8964S"
            title="Battleship With Planes Strategy Board Game For Ages 7 and Up (Amazon Exclusive)"
            price={29.99}
            image="https://m.media-amazon.com/images/I/91bDu7cDe4L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="9076"
            title="Monopoly Classic Game"
            price={43.99}
            image="https://m.media-amazon.com/images/I/81qy+MXuxDL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="16789"
            title="Ravensburger Disney Villainous Strategy Board Game for Age 10 & Up - 2019 TOTY Game of The Year Award Winner"
            price={34.99}
            image="https://m.media-amazon.com/images/I/914RTHzIuJL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="3246"
            title="Chutes and Ladders Board Game for 2 to 4 Players Kids Ages 3 and Up (Amazon Exclusive)"
            price={12.99}
            image="https://m.media-amazon.com/images/I/91bHa8umU7L._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="3426"
            title="Silly Goose Games: Racing Horse Game; Wooden Race Track Game"
            price={29.99}
            image="https://m.media-amazon.com/images/I/91KL6L--MVL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="3436"
            title="Trekking The National Parks: The Award-Winning Family Board Game (Second Edition)"
            price={50}
            image="https://m.media-amazon.com/images/I/91kNf3WXiWL._AC_UL320_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
