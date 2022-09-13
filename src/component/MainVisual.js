import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
  {
    id: 1,
    content: "01 현대엘리베이트 스마트 테크놀로지 체험",
    desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.",
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
  {
    id: 2,
    content: "02 현대엘리베이트 스마트 테크놀로지 체험",
    desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.",
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
  {
    id: 3,
    content: "03 현대엘리베이트 스마트 테크놀로지 체험",
    desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.",
    link: "https://my.matterport.com/show/?m=yEdf9FWaNav",
  },
];
const MainVisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0);
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    afterChange: (index) => setIDX(index),
    autoplay: true,
  };
  const mainSlide = useRef();
  return (
    <section className="MainVisual">
      <Slider {...settings} ref={mainSlide}>
        {SLIDE.map((slide, idx) => (
          <figure
            className={`item item0${slide.id} ${idx === IDX ? "on" : ""}`}
            key={slide.id}
          >
            <div className="inner">
              <h2>{slide.content}</h2>
              <p>{slide.desc}</p>
              <a href={slide.link} target="_blank">
                more
              </a>
            </div>
          </figure>
        ))}
      </Slider>
      <div className="slideNum">
        0{IDX + 1} <span> 0{SLIDE.length}</span>
      </div>
      <ul className="sideTab">
        {SLIDE.map((dots, idx) => (
          <li
            key={dots.id}
            className={idx === IDX ? "on" : ""}
            onClick={() => {
              mainSlide.current.slickGoTo(idx);
            }}
          >
            {dots.content}
          </li>
        ))}
      </ul>
      <div className="slideArrows">
        <button onClick={() => mainSlide.current.slickPrev()}>
          <i className="xi-arrow-left"></i>
        </button>
        <button onClick={() => mainSlide.current.slickNext()}>
          <i className="xi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};
export default MainVisual;
