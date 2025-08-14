import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

import OurStory from './pages/OurStory.jsx';
import Events from './pages/Events.jsx';

import RSVP from './pages/RSVP.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Events />
      <RSVP />
    </>
  );
}

export default App;
