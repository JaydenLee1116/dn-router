import React, {useContext} from 'react';

import { RoutesContext } from "../routes/Router";
import useRouter from "../hooks/useRouter";

const Root = () => {
  const handleCurrentPathClick = useContext(RoutesContext);
  const { push } = useRouter();
  const handleAboutClick = () => {
    push('/about');
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