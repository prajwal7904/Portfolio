import './App.css';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Services from './components/Services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';



function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Testimonials/>
        <Contact/>
        
      </main>
      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
