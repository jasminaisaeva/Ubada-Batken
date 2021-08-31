import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Main from "./pages/main/main";
import News from "./pages/news/news";
import Promise from "./pages/promise/promise";
import AboutUs from "./pages/about_us/aboutUs";
import Facts from "./pages/facts/facts";
import FocusBatken from "./components/focusBatken";

import "./App.css";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="video">
              <video autoPlay muted loop id="myVideo">
                <source
                  src="https://firebasestorage.googleapis.com/v0/b/test-51227.appspot.com/o/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82.MP4?alt=media&token=6808b917-5f28-4b5b-bd7f-02168b6e6175"
                  type="video/mp4"
                />
              </video>
              <Header />
              <Main />
            </div>
          </Route>
          <Route exact path="/news">
            <Header />
            <News />
          </Route>
          <Route exact path="/education/:id">
            <Header />
            <div className="container_page">
              <Facts duration="education" />
            </div>
          </Route>
          <Route exact path="/news/:id">
            <Header />
            <div className="container_page">
              <Facts duration="news" />
            </div>
          </Route>

          <Route exact path="/focus">
            <Header />
            <div className="container_page">
              <FocusBatken duration="focus" />
            </div>
          </Route>

          <Route exact path="/promise">
            <Header />
            <div className="container_page">
              <Promise />
            </div>
          </Route>
          <Route exact path="/about_us">
            <Header />
            <div className="container_page">
              <AboutUs />
            </div>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
