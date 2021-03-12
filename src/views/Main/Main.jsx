import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import RateWidget from '../../components/RateWidget/RateWidget'

import './Main.scss';

export default function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <ul>
            <li>
              <Link to="/Belarus">Belarus</Link>
            </li>
            <li>
              <Link to="/Japan">Japan</Link>
            </li>
            <li>
              <Link to="/Sweden">Sweden</Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
