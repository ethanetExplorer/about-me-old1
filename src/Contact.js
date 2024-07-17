import React from "react";
import "./App.css";

function ContactItem(name, link, image) {
  return (
    <div class="contact-item">
      <a href={link}>
        <img src={image} />
      </a>
      <p>Github</p>
    </div>
  );
}

export default function Contact() {
  return (
    <div class="contacts-container">
      <div class="contact-item">
        <a href="https://github.com/ethanetExplorer/">
          <img src="icons/githubLight.svg" />
        </a>
        <p>Github</p>
      </div>
      <div class="contact-item">
        <a href="https://www.linkedin.com/in/yu-fong-lim-625622306/">
          <img src="icons/linkedin.svg" />
        </a>
        <p>Linkedin</p>
      </div>
      <div class="contact-item">
        <a href="mailto:ethanetexplorer@outlook.com">
          <img src="icons/mail.svg" class="mail-icon" />
        </a>
        <p>Mail</p>
      </div>
    </div>
  );
}
