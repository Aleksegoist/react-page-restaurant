import About from './components/about/About';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
