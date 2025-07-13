import './App.css';
import Navbar from './components/navbar/Navbar';

// import pages
import Main from './components/pages/Main';
import Gallery from './components/pages/Gallery';
import EditTime from './components/pages/EditTime';
import Music from './components/pages/Music';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="main"><Main /></section>
        <section id="gallery"><Gallery /></section>
        <section id="EditTime"><EditTime /></section>
        <section id="music"><Music /></section>
      </main>
    </div>
  );
}

export default App;
