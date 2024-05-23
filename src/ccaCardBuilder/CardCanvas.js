import React from "react";
import PropTypes from "prop-types";
import { borderTypes } from './CardBuilder'
import triangleImage from './../Assets/Gradient Triangles.png';

const playerCard = {
    margin: '10px'
}

const drawRotatedText = (context, text, degrees, xPos, yPos) => {
    context.save();
    context.translate(xPos, yPos);
    context.rotate(degrees * Math.PI / 180);
    context.strokeText(text, 0, 0);
    context.fillText(text, 0,0);
    context.restore();
}

// default card width is 875
const cardWidth = 875;
const cardHeight = cardWidth * 1.4;
const borderThickness = 0.025 * cardWidth;

const logoSize = cardWidth * 0.114;

const getBorderColor = (borderType) => {
    switch (true) {
        case borderType === borderTypes.GOLD: return '#E3CE32';
        case borderType === borderTypes.SILVER: return '#B8B8B8';
        case borderType === borderTypes.BRONZE: return '#CD7F32'
        case borderType === borderTypes.PINK: return '#FF55DF';
        default: return '#FF55DF';
    }
}

const CardCanvas = ({ name, division, image, borderType, teamLogo }) => {
    const canvasRef = React.useRef(null); // Ref to store the canvas element

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Set canvas background color
        if (borderType !== borderTypes.RAINBOW) {
            context.fillStyle = getBorderColor(borderType);
            context.fillStyle = getBorderColor(borderType);
        } else {
            // Get an image of the rainbow border and just draw it on here tbh...
        }

        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw image
        const playerImage = new Image();
        playerImage.onload = () => {
            context.drawImage(playerImage, borderThickness, borderThickness,
                canvas.width - (2 * borderThickness), canvas.height - ( 2 * borderThickness));

            const foreground = new Image();
            foreground.onload = () => {
                context.drawImage(foreground, 0, 0, canvas.width, canvas.height);

                // Draw text
                context.fillStyle = '#50119E';
                context.strokeStyle = '#0ae4f5';
                context.lineWidth = 0.091 * cardWidth * 0.0625;
                context.font = `${0.091 * cardWidth}pt Splatfont2`;
                context.textAlign = 'center';
                drawRotatedText(context, name, -22, 0.582 * cardWidth, 1.211 * cardWidth);
                drawRotatedText(context, division, -22, 0.29 * cardWidth, 0.205 * cardWidth);
            }
            foreground.src = triangleImage;

            const logoImage = new Image();
            logoImage.onload = () => {
                context.drawImage(logoImage, borderThickness, canvas.height - (borderThickness + logoSize),
                    logoSize, logoSize);
            }
            logoImage.src = teamLogo;
        };
        playerImage.src = image;




    }, [name, division, image, borderType, teamLogo]);

    return <canvas ref={canvasRef} width={cardWidth} height={cardHeight} style={playerCard}/>;
};

CardCanvas.propTypes = {
    name: PropTypes.func.isRequired,
    division: PropTypes.func.isRequired,
    image: PropTypes.func.isRequired,
    borderType: PropTypes.func.isRequired,
    teamLogo: PropTypes.func.isRequired
}

export default CardCanvas;