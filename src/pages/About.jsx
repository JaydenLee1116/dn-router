import React, {useContext} from 'react';

import {RouterContext} from "../routes/Router";

const About = () => {
  const handleCurrentPathClick = useContext(RouterContext);
  const handleRootClick = () => {
    handleCurrentPathClick('/');
  }
  return (
    <>
      <div>
        🌼 어바웃 페이지
      </div>
      <button onClick={handleRootClick}>
        홈(루트) 페이지로 가기
      </button>
    </>
  );
};

export default About;