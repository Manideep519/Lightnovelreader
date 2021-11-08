import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NovelDetails from "./components/NovelDetails/NovelDetails";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.scss";
import NovelReader from "./components/NovelReader/NovelReader";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/novel/:name" component={NovelDetails} exact />
        <Route path="/novel/:name/:number" component={NovelReader} exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
