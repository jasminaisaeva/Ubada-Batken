import { Link } from "react-router-dom";

import Css from "./lastNewsCard.module.css";


export default function LastNewsCard({ data }) {
  return (
    <div className="container">
      <div className={Css.flexContainer}>
        {data.images.map((item, id) => {
          return (
            <div className={Css.LastNews_block}>
              <Link to={`/news/${data.id}`} className={Css.link}>
                <img src={item.media} className={Css.news_img} alt="newsImg" />
                <div className={Css.blockFirst}>
                  <h2 className={Css.news_header}>{data.head}</h2>
                  <div className={Css.box_text}>{data.description}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
