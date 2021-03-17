import React from "react";
import GitHub from "../../assets/logo/GitHub.png";

import "./Footer.scss";

const developers = [
  {
    name: 'Viktoryia Ventskute',
    link: 'https://github.com/Ventskute',
  },
  {
    name: 'Andrew Murashko',
    link: 'https://github.com/Andrewmurashko',
  },
  {
    name: 'Aleksei Kupchinskii',
    link: 'https://github.com/AlekseiBY',
  },
  {
    name: 'Tatsiana Slapik',
    link: 'https://github.com/TatsianaSlapik',
  },
]

export default function Footer() {
  return (
    <>
      <footer>
<<<<<<< HEAD
        <div className="container">
          <ul>
          {
            developers.map((el, i) => (
              <li key={i}>
                <a href={el.link} target='_blank'>
                  {el.name}
                  <img src={GitHub} alt='GitHub' className='github_logo'/>
                </a>
              </li>
            ))
          }
          </ul>
          <a className="rss" href="https://rs.school/react/" target='_blank'>
            <span className="rss-year">'21</span>
          </a>
=======
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
            <a className="rss" href="https://rs.school/react/">
              <span className="rss-year">'21</span>
            </a>
          </p>
>>>>>>> 8f4a8ba (feat: add jest modules)
        </div>
      </footer>
    </>
  );
}
