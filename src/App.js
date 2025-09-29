import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from "./components/Footer";
import Homepage from "./Homepage";
import CardBuilder from "./ccaCardBuilder/CardBuilder";
import Projects from './projects/Projects'
import Resume from './resume/Resume'

function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cardbuilder" element={<CardBuilder />} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/resume" element={<Resume/>} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
