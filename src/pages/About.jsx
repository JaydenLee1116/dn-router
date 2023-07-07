import React from 'react';

import useRouter from "../hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  const handleRootClick = () => {
    push('/')
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