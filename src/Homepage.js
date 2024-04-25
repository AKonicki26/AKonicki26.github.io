import Slideshow from './components/Slideshow'
const Homepage = () => {
    return (
        <div className="App-homepage">
            <Slideshow></Slideshow>
            <p>
                Hi there! There's nothing here at the moment. Eventually, things will be here. Come back when that
                happens
            </p>
            <a
                className="githib-link"
                href="https://github.com/AKonicki26"
                target="_blank"
                rel="noopener noreferrer"
            >
                My GitHub profile
            </a>
        </div>
    )
}

export default Homepage;