import React from "react";

const SocialMedia = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${
                  e.offsetY - 13
                }px)`;
            })
            link.addEventListener("mouseleave", () => {
              link.style.transform = "";
            });
        })
    }


  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://facebook.com"
          target="_blank"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialMedia;
