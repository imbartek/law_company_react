import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Menu from "./components/menu";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Menu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
