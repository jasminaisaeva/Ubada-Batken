import React from "react";

import { useLocation } from "react-router-dom";
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

import Logo from "../../assets/img/newlogo1.png";
import Css from "./footer.module.css";

export default function Footer() {
  let location = useLocation();
  return (
    <footer className={`${location.pathname === "/" ? Css.footer : ""}`}>
      <div className="container">
        <div>
          <div className={Css.block}>
            <img src={Logo} className={Css.Logo}  alt="Logo"/>
            <div className={Css.gmail}>batken.ubada@gmal.com</div>
            <div className={Css.block1}>
             <a href="https://www.instagram.com/ubada_batken/?utm_medium=copy_link"><InstagramOutlined className={Css.icons} /></a> 
             <a href="https://www.facebook.com/profile.php?id=100070442649426"> <FacebookOutlined className={Css.icons} /></a>  
              <a href="/"> <WhatsAppOutlined className={Css.icons} /></a> 
              <a  href="https://www.youtube.com/channel/UCxvaBoGa2xBsecMojC5PbRQ"> <YoutubeOutlined className={Css.icons} /></a> 
            </div>
          </div>
        </div>
        <p className={Css.title_and}>&copy; Баардык укуктар корголгон 2021.</p>
      </div>
    </footer>
  );
}
