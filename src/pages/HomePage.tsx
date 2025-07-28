import Header from '../components/Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
