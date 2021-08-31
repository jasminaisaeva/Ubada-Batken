import React from "react";
import {  Link } from "react-router-dom";

import X from "../../assets/img/header_x.png";
import Css from "./menuBurger.module.css";


export default function MenuBurger(props) {
  return (
    <div className={`${Css.menu} ${props.open ? Css.menu_active : ""}`}>
      <div
        className={Css.blur}
        onClick={() => props.setOpen(!props.open)}
      ></div>
      <div className={Css.content}>
        <div className={Css.box_img}>
          <img src={X} alt="x" onClick={() => props.setOpen(!props.open)} />
        </div>
        <ul className={Css.box_list}>
          <li onClick={() => props.setOpen(!props.open)}>
            <Link to="/news" className={`${Css.link} link`}>
              Жаңылыктар
            </Link>
          </li>
          <li onClick={() => props.setOpen(!props.open)}>
            <Link to="/promise" className={`${Css.link} link`}>
              Убадалар
            </Link>
          </li>

          <li onClick={() => props.setOpen(!props.open)}>
            <Link to="/focus" className={`${Css.link} link`}>
              Фокус Баткен
            </Link>
          </li>
          <li onClick={() => props.setOpen(!props.open)}>
            <Link to="/about_us" className={`${Css.link} link`}>
              Биз жөнүндө
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
