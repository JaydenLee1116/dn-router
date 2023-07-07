import './App.css';

import Router from "./routes/Router";

import Root from "./pages/Root";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Router.Route path='/' component={<Root />} />
        <Router.Route path='/about' component={<About />} />
      </Router>
    </div>
  );
}

export default App;
