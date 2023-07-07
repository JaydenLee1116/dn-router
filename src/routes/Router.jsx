import React, {createContext, useState} from 'react';

const RoutesContext = createContext(null);

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const handleCurrentPathClick = (path) => {
    setCurrentPath(path);
  }

  return (
    <RoutesContext.Provider value={handleCurrentPathClick}>
      { React.Children.toArray(children).filter((node) => node.props.path === currentPath)}
    </RoutesContext.Provider>
  );
};

const Route = ({ path, component }) => {

  return (
    <>
      { component }
    </>
  );
};

Router.Route = Route;

export { Router, RoutesContext };