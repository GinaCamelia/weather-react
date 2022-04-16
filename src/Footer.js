import React from "react";


export default function Footer() {
    return (
      <div className="Footer">
        <div className="link-github">
              <a href="https://github.com/GinaCamelia/my-awesome-weather-app" 
              className="link"
              target="_blank"
              rel="noreferrer">Open-source code{" "}</a>
              by <a href="https://laughing-kilby-b8cd7c.netlify.app" 
              className="link"
              target="_blank"
              rel="noreferrer">Gina-Camelia Hodorogea </a>
            </div>
              <div className="contact-details">
                <span className="email"><strong>E-mail:{" "}</strong></span>
                camelia_hodorogea@yahoo.com
                <span className="instagram"><strong>{" "}Instagram:</strong></span> @gina.camelia
              </div>   
        </div>
    );
} 