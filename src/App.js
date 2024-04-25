import logo from './logo.svg';
import './App.css';
import Slideshow from './components/Slideshow'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" */}

        <p>
          Hi there! There's nothing here at the moment. Eventually, things will be here. Come back when that happens
        </p>
        <a
          className="githib-link"
          href="https://github.com/AKonicki26"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub profile
        </a>
      </header>
      <Slideshow></Slideshow>
    </div>
  );
}

export default App;
