import React, {useState} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchableDropdown from "../components/SearchableDropdown";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

const cardInfoInput = {

}

const cardInfoDisplay = {

}

const borderTypes = Object.freeze({
    BRONZE: Symbol("bronze"),
    SILVER: Symbol("silver"),
    GOLD: Symbol("gold"),
    RAINBOW: Symbol("rainbow"),
});

const CardBuilder = () => {
    const [playerName, setPlayerName] = useState("Player");
    const [division, setDivision] = useState(null);
    const [borderType, setBorderType] = useState(null);
    const [playerImage, setPlayerImage] = useState(null);
    const divisionCount = 6;
    const cardWidth = 150;
    const cardHeight = 300;

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
                                setBorderType(border[0].toUpperCase() + border.slice(1).toLowerCase())
                            }}>{border[0].toUpperCase() + border.slice(1).toLowerCase()}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <input type="file" onChange={(img) => URL.createObjectURL(img.target.files[0])}/>
            </div>
            <div className={cardInfoDisplay}>
                <div>Player Name: {playerName}</div>
                <div>Player Division: {division}</div>
                <div>Border Type: {borderType}</div>

                <img src={playerImage} alt="Player Image" width={cardWidth} height={cardHeight}/>
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