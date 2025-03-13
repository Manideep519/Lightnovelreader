// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NovelDetails from "./components/NovelDetails/NovelDetails";
import NovelReader from "./components/NovelReader/NovelReader";
// packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.scss";

// axios.defaults.baseURL = "https://light-novel-scraper-api.herokuapp.com/";
axios.defaults.baseURL = "http://localhost:8000";
export const server_url = axios.defaults.baseURL;

function App() {
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/novel/:name" component={NovelDetails} exact />
        <Route path="/novel/:name/:number" component={NovelReader} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
