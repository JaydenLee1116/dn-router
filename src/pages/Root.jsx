import React from 'react';

import useRouter from "../hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  const handleAboutClick = () => {
    push('/about')
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