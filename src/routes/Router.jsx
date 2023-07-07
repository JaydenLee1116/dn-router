import React, {createContext, useState} from 'react';

import useRouter from "../hooks/useRouter";
const RouterContext = createContext(null);

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const handleCurrentPathClick = (path) => {
    setCurrentPath(path);
  };

  window.onpopstate = () => handleCurrentPathClick(window.location.pathname);

  return (
    <RouterContext.Provider value={handleCurrentPathClick}>
      { React.Children.toArray(children).filter((child) => child.props.path === currentPath)}
    </RouterContext.Provider>
  );
};

const Route = ({ path, component }) => {
  const { push } = useRouter();
  push(path);

  return (
    <>
      { component }
    </>
  );
};

Router.Route = Route;

export { Router, RouterContext };