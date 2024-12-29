import React from "react";
import TypingEffect from "react-typing-effect";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-main">
        <div className="header">
          <h1>
            <TypingEffect
              text={["Contact Me ."]}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
