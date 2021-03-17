import React, { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import Search from "../../components/Search/Search";
import actions from "../../utils/actions";
import { getLocaleTxt } from "../../utils/api";
import image from '../../assets/img/belarus_promo.jpg';

import "./Main.scss";
import Card from "../../components/Card/Card";

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
      <Header>
        <Search />
      </Header>
      { authForm.isFormOpen &&
        <AuthForm isSignup={authForm.isSignup} setUser={setUser} closeForm={closeAuthForm} />
      }
      <PromoBlock />
      <main className="main">
        <h2 className='countries'>Countries</h2>
        <div className="container cards-container">
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
          <Card name='Belarus' capital='Minsk' image={image}/>
        </div>
      </main>
      <Footer />
    </>
  );
}
