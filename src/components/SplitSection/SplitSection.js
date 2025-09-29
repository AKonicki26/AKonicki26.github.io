import "./SplitSection.css"; // import your custom CSS

function SplitSection({ imageSrc, imageAlt, title, text, flip = false, showTitle = true }) {
    return (
        <div className={`split-section ${flip ? "flip" : ""}`}>
            <div className="split-image">
                <img src={imageSrc} alt={imageAlt} />
            </div>
            <div className="split-text">
                {showTitle? <h2>{title}</h2> : ""}
                <p>{text}</p>
            </div>
        </div>
    );
}

export default SplitSection;

