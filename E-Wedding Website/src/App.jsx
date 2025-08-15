import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import OurStory from './pages/OurStory.jsx';
import Events from './pages/Events.jsx';
import RSVP from './pages/RSVP.jsx';
import RegistrySection from './pages/Registry.jsx';
// Import Gallery
import Gallery from './pages/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <OurStory />
      <Events />
      <RSVP />
      <Gallery />
      {/* Add Registry Section */}
      <RegistrySection />
        {/* Add Footer */}
      <Footer />
    </>
  );
}

export default App;
