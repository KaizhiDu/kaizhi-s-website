/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
// 引入轮播模块
import { Carousel } from "react-bootstrap";
// 引入图片
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";

const DashboardCarousel = () => {
    return (
        //<div className="index-banner-region" style={{ height: height + "px" }}>
            <Carousel>
                <Carousel.Item>
                    <div className="w1000">
                        <img
                            alt="bannerText1"
                            src={ image1 }
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="w1000">
                        <img
                            alt="bannerText1"
                            src={ image2 }
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
       // </div>
    )
}

export default DashboardCarousel