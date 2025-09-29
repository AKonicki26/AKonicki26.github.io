import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

import ProjectSlide from '../Assets/projectsslide.png'
import LC from '../Assets/leahy.jpg'
import Cards from '../Assets/cardsslide.png'

const slideImages = [
    {
        url: ProjectSlide,
        caption: 'See some of my Projects!'
    },
    {
        url: LC,
        caption: 'See my Experience!'
    },
    {
        url: Cards,
        caption: 'Build some Cards!'
    },
];

const divStyle  = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
}

const spanStyle = {
    padding: '20px',
    background: '#343942',
    color: '#ffffff',
    display: 'flex',
    width: '100%',

}

const Slideshow = (props) => {
    return (
        <div className="slide-container">
            <Fade>
                {slideImages.map((slideImage, index) => (
                    <div className={index}>
                        <div style={{...divStyle, 'backgroundImage': `url(${slideImage.url})`}}>

                        </div>
                        <span style={spanStyle}>{slideImage.caption}</span>
                    </div>
                ))}
            </Fade>
        </div>
    )
};

export default Slideshow;