import githubPfp from './images/GithubPfp.jpg'
import githubLogo from './images/Github Logo.png'
import linkedinLogo from './images/linkedin.svg'

const headerLogo = {
    'align-items': 'center',
    display: 'flex',
    'flex-direction': 'row',
    float: 'left',
    border: '2px solid black'
}

const pageNavigaton = {
    display: 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    'justify-content': 'center',
    'font-size': 'calc(10px + 2vmin)',
    'color': 'white',
    overflow: 'hidden',
    border: '2px solid red',
}

const linkContainer = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'right',
    'font-size': 'calc(1px + 2vmin)',
    float: 'right',
    border: '2px solid black'
}

const linkButtonStyle = {
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    cursor: 'pointer'
}

const headerImage = {
    height: '6vh'
}

const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
};

const links = [
    {
        name: 'github',
        image: githubLogo,
        link: 'https://github.com/AKonicki26/'
    }, {
        name: 'linkedin',
        image: linkedinLogo,
        link: 'https://www.linkedin.com/in/anne-konicki/'
    }
]

const linkButton = (imageSource) => {
    return (
        <div style={linkButtonStyle} onClick={() => openInNewTab(imageSource.link)}>
            <svg style={headerImage} src={imageSource.image} alt={`${imageSource.name} link`}/>
            <div>{imageSource.name}</div>
        </div>
    );
}

const Header = () => {

    return (
        <header className="App-header" style={{'border': '2px solid white'}}>
            <div style={headerLogo}>
                <img
                    style={{
                        ...headerImage, 'margin-left': '2vh',
                        'margin-right': '2vh'
                    }}
                    src={githubPfp} alt="um..."/>
                <p>AKonicki26.github.io</p>
            </div>
            <div style={pageNavigaton}>Imagine there are things here</div>
            <div style={linkContainer}>
                {links.map(linkObj => linkButton(linkObj))}
            </div>
        </header>
    );
};

export default Header;