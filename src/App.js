import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLink/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
