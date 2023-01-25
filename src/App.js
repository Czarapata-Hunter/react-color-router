import './App.css';
import Header from './components/Header/Header.js';
import ColorSwitch from './components/ColorSwitch/ColorSwitch.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ColorSwitch />
      <Footer className="footer" />
    </div>
  );
}

export default App;
