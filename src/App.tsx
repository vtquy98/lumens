import React from "react";
import "./App.css";

interface IProduct {
  image: string;
  title: string;
  description: string;
  isisInsufficientCoin: boolean;
}

const petrol: Array<IProduct> = [
  {
    image: require("../src/assets/images/p1.png"),
    title: "15 Coins",
    description: "50% discount for every $100 top-up on your Shell Petrol Card",
    isisInsufficientCoin: true,
  },
  {
    image: require("../src/assets/images/p2.png"),
    title: "1,000 Coins",
    description: "70% discount top-up on your Shell Petrol Card",
    isisInsufficientCoin: false,
  },
];

const rentalRebate: Array<IProduct> = [
  {
    image: require("../src/assets/images/r1.png"),
    title: "20 Coins",
    description: "Get $20 Rental rebate",
    isisInsufficientCoin: true,
  },
  {
    image: require("../src/assets/images/r2.png"),
    title: "15 Coins",
    description: "Get $500 Rental rebate",
    isisInsufficientCoin: true,
  },
];

const foodAndBeverage: Array<IProduct> = [
  {
    image: require("../src/assets/images/f1.png"),
    title: "25 Coins",
    description: "NTUC Fairprice $50 Voucher",
    isisInsufficientCoin: true,
  },
  {
    image: require("../src/assets/images/r2.png"),
    title: "5 Coins",
    description: "Free Cold Stone Sundae at any flavour!",
    isisInsufficientCoin: true,
  },
];
const RenderProduct = ({ items }: { items: Array<IProduct> }) => {
  return (
    <div className="product-container">
      {items.map((item, idx) => (
        <div className="card product-card" key={idx}>
          <img src={item.image} alt={`item-${idx}`} className="product-image" />
          <div className="card-content">
            <h4
              className={
                item.isisInsufficientCoin
                  ? "product-title"
                  : "product-title product-title-disable"
              }
            >
              {!item.isisInsufficientCoin && (
                <img
                  src={require("../src/assets/images/coin.svg").default}
                  alt=""
                />
              )}{" "}
              {item.title}
            </h4>
            <p className="card-text">{item.description}</p>
            {!item.isisInsufficientCoin && (
              <p className="text-blue">Insufficient coins</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <div className="header-container">
            <div className="header-content">
              <a href="javsacript:void(0)" className="back-icon">
                <img
                  src={require("../src/assets/images/chevron-left.svg").default}
                  alt=""
                />
              </a>
              <h1 className="text-white">Silver Tier</h1>
              <p className="text-gray">
                In Silver Tier, every $1 in rental fee paid, you get 2 coins to
                redeem exclusive rewards.
              </p>
              <div className="card current-balance">
                <h4 className="text-gray">Available Coin balance</h4>
                <div className="balance">340</div>
                <div className="progress">
                  <div className="progress-active" />
                </div>
                <div className="card-text">
                  You have paid rental fee for $1,200. Pay more $800 to achieve
                  Gold Tier.
                </div>
                <a href="javsacript:void(0)" className="link">
                  View tier benefits{" "}
                  <img
                    src={
                      require("../src/assets/images/chevron-right.svg").default
                    }
                    alt=""
                  />
                </a>
                <div className="button-container">
                  <button className="button">My Coupons</button>
                </div>

                <h5 className="muted-text">Updated : 02/11/2021</h5>
              </div>
            </div>
          </div>
          <div className="body-container">
            <h3 className="section-title">Petrol</h3>
            <RenderProduct items={petrol} />

            <h3 className="section-title">Rental Rebate</h3>
            <RenderProduct items={rentalRebate} />

            <h3 className="section-title">Food And Beverage</h3>
            <RenderProduct items={foodAndBeverage} />
          </div>
        </div>

        <nav className="navigation">
          <a href="javsacript:void(0)" className="bloc-icon">
            <img
              src={require("../src/assets/images/home-icon.svg").default}
              alt=""
            />
          </a>
          <a href="javsacript:void(0)" className="bloc-icon">
            <img
              src={require("../src/assets/images/bell-icon.svg").default}
              alt=""
            />
          </a>
          <a href="javsacript:void(0)" className="bloc-icon">
            <img
              src={require("../src/assets/images/card-icon.svg").default}
              alt=""
            />
          </a>
          <a href="javsacript:void(0)" className="bloc-icon">
            <img
              src={require("../src/assets/images/user-icon.svg").default}
              alt=""
            />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default App;
