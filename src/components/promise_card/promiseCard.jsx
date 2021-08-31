import React from "react";

import Css from "./promiseCard.module.css";
import Profile from "../../assets/img/promise_profile.png";


export default function PromiseCard({ data }) {
  const date = new Date(data.expiration_date);
  return (
    <div className={Css.block}>
      <div className="container">
        <div className={Css.container}>
          <div className={Css.box_top}>
            <img
              src={data.author_image ? data.author_image : Profile}
              alt="img"
            />
            <div className={Css.box_text}>
              <p className={Css.name__text}>{data.author_name}</p>
              <p className={Css.profession}>{data.position}</p>
              
            </div>
          </div>
          <div className={Css.box_bottom}>
            <div className={Css.process}>Процессте</div>
            <div className={Css.time}>Аяктоо күнү: {date.yyyymmdd()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
