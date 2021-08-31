import React from "react";
import LastNews from "../../components/last_news/lastNews";

import Css from "./news.module.css"



export default function News() {
  return (
    <div className={`${Css.container} wrapp`}>
      <LastNews />
    </div>
  );
}
