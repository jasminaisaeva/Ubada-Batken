import React from 'react'

import Css from "./newsVideo.module.css"
import Video from "../../assets/img/news_video.png"

export default function NewsVideo() {
    return (
        <div className={Css.block}>
            <div className="container">
            <ul className={Css.list}>
                <li>Жаңылыктар</li>
                <li>{">"}</li>
                <li>Акыркы кабарлар</li>
            </ul>
            <img src={Video} className={Css.video}/>

            </div>
           
        </div>
    )
}
