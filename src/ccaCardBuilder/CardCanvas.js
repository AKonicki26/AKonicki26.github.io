import React, {createElement} from "react";
import PropTypes from "prop-types";
import { borderTypes } from './CardBuilder'

const playerCard = {

}

const getBorderColor = (borderType) => {
    switch (true) {
        case borderType === borderTypes.GOLD: return '#E3CE32';
        case borderType === borderTypes.SILVER: return '#B8B8B8';
        case borderType === borderTypes.BRONZE: return '#CD7F32'
        case borderType === borderTypes.PINK: return '#FF55DF';
    }
}

const CardCanvas = ({ name, division, image, borderType }) => {
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
            const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
            // Calculate the interval for each color stop
            const interval = 1;

            // Adding color stops smoothly transitioning between white and blue
            for (let i = 0; i <= 1; i += interval) {
                const color = i % 2 ? 'white' : 'blue';
                gradient.addColorStop(i, color);
            }
            context.fillStyle = gradient;
        }

        context.fillRect(0, 0, canvas.width, canvas.height);

        // Draw image
        const img = new Image();
        img.onload = () => {
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            // Draw text
            context.fillStyle = 'white';
            context.font = 'bold 40px Arial';
            context.textAlign = 'center';
            context.fillText(name, canvas.width / 2, 50);
            context.fillText(division, canvas.width / 2, 160);
        };
        img.src = image;
    }, [name, division, image, borderType]);

    return <canvas ref={canvasRef} width={875} height={1225} />;
};

CardCanvas.propTypes = {
    name: PropTypes.func.isRequired,
    division: PropTypes.func.isRequired,
    image: PropTypes.func.isRequired,
    borderType: PropTypes.func.isRequired
}

export default CardCanvas;