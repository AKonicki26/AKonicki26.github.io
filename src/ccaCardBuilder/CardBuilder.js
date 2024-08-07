import React, {useState} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Dropdown } from "react-bootstrap";
import CardCanvas from "./CardCanvas";
import Slider from "@mui/material/Slider"

const cardInfoInput = {

}

const cardInfoDisplay = {

}

export const borderTypes = Object.freeze({
    BRONZE: "Bronze",
    SILVER: "Silver",
    GOLD: "Gold",
    RAINBOW: "Rainbow",
    PINK: "Pink"
});

const CardBuilder = () => {
    const [playerName, setPlayerName] = useState("Player");
    const [division, setDivision] = useState(null);
    const [borderType, setBorderType] = useState(null);
    const [playerImage, setPlayerImage] = useState();
    const [logoImage, setLogoImage] = useState();
    const [imageXPos, setImageXPos] = useState();
    const [imageYPos, setImageYPos] = useState();
    const divisionCount = 6;

    return (
        <div className="main-content">
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"
            />
            <div className={cardInfoInput}>
                <label>
                    Player Name:
                    <input type="text" name="playerName" value={playerName}
                           onChange={text => setPlayerName(text.target.value)}/>
                </label>
                <Dropdown>
                    <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic">
                        {division || "Select Division"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                        {Array.from({length: divisionCount}, (_, index) => (
                            <Dropdown.Item eventKey={`${index + 1}`} onClick={() => {
                                setDivision(`Division ${index + 1}`)
                            }}>Division {index + 1}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic">
                        {borderType || "Select Border Type"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                        {Object.keys(borderTypes).map((border, index) => (
                            <Dropdown.Item eventKey={`${index + 1}`} onClick={() => {
                                setBorderType(borderTypes[border])
                            }}>{border[0].toUpperCase() + border.slice(1).toLowerCase()}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <label htmlFor='playerImage'>Player Image: </label>
                    <input type="file" name='playerImage' onChange={img => setPlayerImage(URL.createObjectURL(img.target.files[0]))}/>

                <label htmlFor='teamLogo'>Logo Image: </label>
                    <input type="file" name='teamLogo' onChange={img => setLogoImage(URL.createObjectURL(img.target.files[0]))}/>

            </div>
            <div className={cardInfoDisplay}>
                <CardCanvas division={division} image={playerImage} name={playerName} borderType={borderType}
                            teamLogo={logoImage} sliderPosition={imageXPos}/>
                <div>
                    Image x Position
                    <Slider defaultValue={50} onChange={e => setImageXPos(e.target.value) }/>
                </div>
            </div>
        </div>
    )
}

const CardBuilderPage = () => {
    return (
        <div className="App">
        <Header/>
            <CardBuilder/>
            <Footer/>
        </div>
    )
}

export default CardBuilderPage