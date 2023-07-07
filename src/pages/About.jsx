import React, {useContext} from 'react';

import {RoutesContext} from "../routes/Router";
import useRouter from "../hooks/useRouter";

const About = () => {
  const handleCurrentPathClick = useContext(RoutesContext);
  const { push } = useRouter();
  const handleRootClick = () => {
    push('/');
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