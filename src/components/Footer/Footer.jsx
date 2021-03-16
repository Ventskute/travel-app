import React from "react";
import GitHub from "../../assets/logo/GitHub.png";

import "./Footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container_footer">
          <p>
            Viktoryia Ventskute
            <a href="https://github.com/Ventskute">
              <img className="github_logo" src={GitHub} />
            </a>
          </p>

          <p>
            Andrew Murashko
            <a href="https://github.com/Andrewmurashko">
              <img className="github_logo" src={GitHub} />
            </a>{" "}
          </p>
          <p>
            Aleksei
            <a href="https://github.com/AlekseiBY">
              <img className="github_logo" src={GitHub} />
            </a>{" "}
          </p>
          <p>
            Tatsiana Slapik
            <a href="https://github.com/TatsianaSlapik">
              <img className="github_logo" src={GitHub} />
            </a>
          </p>
          <p>
            <a class="rss" href="https://rs.school/react/">
              <span class="rss-year">'21</span>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
