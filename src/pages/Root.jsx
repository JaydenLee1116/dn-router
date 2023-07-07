import React, {useContext} from 'react';

import { RouterContext } from "../routes/Router";

const Root = () => {
  const handleCurrentPathClick = useContext(RouterContext);
  const handleAboutClick = () => {
    handleCurrentPathClick('/about');
  }
  return (
    <>
      <div>
        🌱 루트 페이지입니다.
      </div>
      <button onClick={handleAboutClick}>
        어바웃 페이지로 가기
      </button>
    </>
  );
};

export default Root;