// Footer.js
import React from "react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                {/* Contact Info */}
                <div style={sectionStyle}>
                    <a href="mailto:akonicki22@gmail.com" style={linkStyle}>
                        📧 akonicki22@gmail.com
                    </a>
                </div>

                {/* Social Links */}
                <div style={sectionStyle}>
                    <a
                        href="https://www.linkedin.com/in/astrid-konicki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        {/* LinkedIn SVG icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="20"
                            height="20"
                            style={{ marginRight: "6px" }}
                        >
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.07c.65-1.23 2.25-2.53 4.63-2.53 4.95 0 5.87 3.27 5.87 7.53V24h-5V16.2c0-1.85-.03-4.24-2.58-4.24-2.58 0-2.97 2.02-2.97 4.1V24h-5V8z" />
                        </svg>
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/AKonicki26/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        {/* GitHub SVG icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="20"
                            height="20"
                            style={{ marginRight: "6px" }}
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.583 0-.288-.012-1.25-.018-2.27-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.728.083-.728 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.335-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.018.004 2.043.138 3.003.403 2.288-1.552 3.294-1.23 3.294-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.625-5.475 5.921.429.37.81 1.102.81 2.222 0 1.604-.014 2.896-.014 3.286 0 .324.216.701.825.581C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>

                {/* Location */}
                <div style={sectionStyle}>
                    📍 Auburn, MA / Burlington, VT
                </div>

                {/* Back to Top */}
                <div style={{ marginTop: "10px" }}>
                    <button onClick={scrollToTop} style={backToTopStyle}>
                        ⬆ Back to Top
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// Styles
const footerStyle = {
    backgroundColor: "#222",
    color: "#fff",
    padding: "30px 0",
    textAlign: "center",
    fontSize: "0.95rem",
};

const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.6",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};

const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "4px",
};

const backToTopStyle = {
    background: "none",
    border: "1px solid #fff",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
};
