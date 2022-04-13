import React from "react";


export default function Footer() {
    return (
      <div className="Footer">
        <div class="link-github">
              <a href="https://github.com/GinaCamelia/my-awesome-weather-app" 
              class="link"
              target="_blank"
              rel="noreferrer">Open-source code{" "}</a>
              by <a href="https://laughing-kilby-b8cd7c.netlify.app" 
              class="link"
              target="_blank"
              rel="noreferrer">Gina-Camelia Hodorogea </a>
            </div>
              <div class="contact-details">
                <span class="email"><strong>E-mail:{" "}</strong></span>
                camelia_hodorogea@yahoo.com
                <span class="instagram"><strong>{" "}Instagram:</strong></span> @gina.camelia
              </div>   
        </div>
    );
} 