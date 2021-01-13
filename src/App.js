import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Features from './components/Features';
import FooterBottom from './components/FooterBottom';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
      <Navbar/>  
      <Header/>
      <Clients/>
      <About/>
      <Services/>
      <Features/>
      <Testimonial/>
      <GetStarted/>
      <Projects/>
      <Contact/>
      <FooterBottom/>
    </>
  );
}

export default App;
