import React from "react";
import "./Footer.scss";
import tmdb from "../../Assets/tmdb.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__start">
          <img
            src={tmdb}
            alt="tmdb"
            className="footer__logo-tmdb"
            onClick={() =>
              window.open(` https://www.themoviedb.org/en`, "_blank")
            }
          />


        </div>

        <div className="footer__center">


          <h1 className="footer__text">
            Copyright©2021, MoviesPort
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Footer;
