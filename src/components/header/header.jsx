import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Logo from "../../assets/img/a.png";
import Newlogo from "../../assets/img/newlogo1.png";
import BurgerMenu from "../../assets/img/hamburger_menu.png";
import BurgerMenuBlue from "../../assets/img/hamburger_menu_blue.png";
import MenuBurger from "../menu_burger/menuBurger";
import Css from "./header.module.css";


export default function Header() {
  let location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className={`${location.pathname === "/" ? "" : Css.header}`}>
      <div className="container">
        <div className={Css.header_main}>
          {location.pathname === "/" ? (
            <Link to="/">
              <img src={Logo} alt="Logo" className={Css.logo} />
            </Link>
          ) : (
            <div className={Css.header_block}>
              <Link to="/">
                <img src={Newlogo} alt="Logo" className={Css.logoNews} />
              </Link>
              <ul className={Css.header_nav}>
                <li>
                  <Link to="/news" className={`${Css.link} link`}>
                    Жаңылыктар
                  </Link>
                </li>
                <li>
                  <Link to="/promise" className={`${Css.link} link`}>
                    Убадалар
                  </Link>
                </li>

                <li>
                  {" "}
                  <Link to="/focus" className={`${Css.link} link`}>
                    Фокус Баткен
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/about_us" className={`${Css.link} link`}>
                    Биз жөнүндө
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <MenuBurger open={open} setOpen={setOpen} />

        {location.pathname === "/" ? (
          <img
            src={BurgerMenuBlue}
            alt="BurgerMenu"
            onClick={() => setOpen(!open)}
            className={Css.burger1}
          />
        ) : (
          <img
            src={BurgerMenuBlue}
            alt="BurgerMenu"
            onClick={() => setOpen(!open)}
            className={Css.burger}
          />
        )}
        <img
          src={BurgerMenu}
          alt="BurgerMenu"
          onClick={() => setOpen(!open)}
          className={Css.burgermobile}
        />
      </div>
    </header>
  );
}
