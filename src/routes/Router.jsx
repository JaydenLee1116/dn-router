import React, {createContext, useContext} from 'react';

const RoutesContext = createContext(null);

const Router = ({ children }) => {
  return (
    <RoutesContext.Provider value={window.location.pathname}>
      { children }
    </RoutesContext.Provider>
  );
};


const Route = ({ path, component }) => {
  const route = useContext(RoutesContext);
  return path === route && (
    <>
      { component }
    </>
  );
};

Router.Route = Route;

export default Router;