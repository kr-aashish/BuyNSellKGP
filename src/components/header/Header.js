import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  const goToPath = (path) => {
    navigate(path);
  };

  return (
    <div className="header">
      <img
        className="header__logo"
        src={require("../../assets/logo.png")}
        onClick={() => goToPath("/")}
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span
            className="header__optionLineTwo"
            onClick={() => goToPath("/account/12")}
          >
            Account
          </span>
        </div>
      </div>

      <Link to="/checkout">
      <div className="header__optionBasket">
        {/* <div onClick={()=> goToPath("/checkout")}> <ShoppingBasketIcon /> </div> */}
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__basketCount">0</span>
      </div>
      </Link>
    </div>
  );
};

export default Header;
