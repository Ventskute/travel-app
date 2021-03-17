import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import actions from "../../utils/actions";
import { getLocaleTxt } from "../../utils/api";

import "./Main.scss";

export default function Main() {
  const { locale, dict, user } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [authForm, setAuthForm] = useState({ isFormOpen: false, isSignup: true });

  const setUser = (user) => {
    dispatch({ type: actions.SET_USER, user: user });
  };
  const logoutUser = () => {
    dispatch({ type: actions.REMOVE_USER });
  };

  const openSignupForm = () => {
    setAuthForm({ ...authForm, isFormOpen: true, isSignup: true });
  };
  const openSigninForm = () => {
    setAuthForm({ ...authForm, isFormOpen: true, isSignup: false });
  };
  const closeAuthForm = () => {
    setAuthForm({ ...authForm, isFormOpen: false });
  };

  useEffect(() => {
    getLocaleTxt(locale).then((res) => dispatch({ type: actions.ADD_LOCALE, payload: res }));
  }, []);

  return (
    <>
      <Header />
      {authForm.isFormOpen && (
        <AuthForm isSignup={authForm.isSignup} setUser={setUser} closeForm={closeAuthForm} />
      )}
      <PromoBlock />
      <main className="main">
        <div className="container">
          <ul>
            <li>
              <Link to="/Belarus">{dict.BELARUS}</Link>
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
