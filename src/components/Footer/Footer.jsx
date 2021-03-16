import React from "react";
import { Img } from "react-image";
import GitHub from "../../assets/logo/GitHub.png";
import "./Footer.scss";
const GitHubLogo = () => <Img src={GitHub} width="18px" height="18px" />;

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container_footer">
          <p>
            Viktoryia Ventskute
            <a href="https://github.com/Ventskute">
              <GitHubLogo />
            </a>
          </p>

          <p>
            Andrew Murashko
            <a href="https://github.com/Andrewmurashko">
              <GitHubLogo />
            </a>{" "}
          </p>
          <p>
            Aleksei
            <a href="https://github.com/AlekseiBY">
              <GitHubLogo />
            </a>{" "}
          </p>
          <p>
            Tatsiana Slapik
            <a href="https://github.com/TatsianaSlapik">
              <GitHubLogo />
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
