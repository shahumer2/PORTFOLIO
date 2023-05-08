import Intro from "./components/navbar/Intro/Intro";
import Services from "./components/navbar/Servicee/services";
import Navbar from "./components/navbar/Navbar"
import Experience from "./components/navbar/Experience/Experience";
import Works from "./components/navbar/Works/works";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/navbar/Contact/Contact";

import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />

      <Services />
      <Experience />
      <Works />
      <Portfolio />

      <Contact />
      <Footer />

    </div >
  );
}

export default App;
