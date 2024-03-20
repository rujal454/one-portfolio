import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Slideshow from "./components/Slideshow";
import LoginPage from "./components/loginc";
import Campaign from "./components/Campaign";
function App() {
  return (
    <div>
      <Navbar />
      <Slideshow />
      <Home />
      <Campaign />
      <Contact/>
    </div>
  );
}

export default App;
