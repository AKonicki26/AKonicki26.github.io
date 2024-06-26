import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'

const slideImages = [
    {
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 1'
    },
    {
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
        caption: 'Slide 2'
    },
    {
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        caption: 'Slide 3'
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