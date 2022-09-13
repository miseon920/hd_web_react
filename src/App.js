import "./App.css";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";

const App = () => {
  return (
    <div className="Wrap">
      <Header />
      <MainVisual />
    </div>
  );
};

export default App;

/*
img 경로
html 파일: %PUBLIC_URL%
JavaScript 파일: process.env.PUBLIC_URL
#index.html 파일에 작성하는 경우
<img src="%PUBLIC_URL%/이미지경로/이미지파일.jpg" />
%PUBLIC_URL% 라고 환경변수를 경로에 작성합니다.

#JavaScript 파일에 작성하는 경우
<img src={process.env.PUBLIC_URL + '/img/logo.png'} />
process.env.PUBLIC_URL라고 환경변수를 경로에 작성합니다.

#컴포넌트 쉽게 관리하기 
https://velog.io/@rimo09/React%EC%97%90%EC%84%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B2%BD%EB%A1%9C-%EA%B9%94%EB%81%94%ED%9E%88-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
*/
