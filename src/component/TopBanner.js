import { useState } from "react";

const TopBanner = () => {
  const [Top, setTop] = useState(false);
  //const TopBanner = useRef();
  const close = () => {
    setTop(!Top);
  };
  return (
    <div className={`TopBanner ${Top ? "on" : ""}`}>
      {/* ref={TopBanner} */}
      <div className="inner">
        <h2>
          현대엘리베이트 스마트 테크놀로지 체험 <span>Green Technology</span>
        </h2>
        <p>현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.</p>
        <i className="xi-close" onClick={close}></i>
      </div>
    </div>
  );
};
export default TopBanner;
