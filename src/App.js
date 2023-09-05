import logo from "./logo.svg";
import Home from "./pages/Home";
import "./App.css";
import Navigation from "./components/global-components/Navigation/Navigation";
import Footer from "./components/global-components/Footer/Footer";

function App() {
  return (
    <div className="body">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
