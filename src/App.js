import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import Header from './Header'
import Footer from "./Footer";
import Slideshow from './components/Slideshow'

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Homepage></Homepage>
            <Footer></Footer>
        </div>
    );
}

export default App;
