import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import './Main.scss';

export default function Main() {
  const { locale } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`http://localhost:3000/locale/${locale}`)
      .then((res) => res.json())
      .then((res) => dispatch({type: actions.ADD_LOCALE, payload: res}))
  }, [])

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
