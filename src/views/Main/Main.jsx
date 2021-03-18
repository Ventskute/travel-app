import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/AuthForm/AuthForm";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import PromoBlock from "../../components/PromoBlock/PromoBlock";
import Search from "../../components/Search/Search";
import actions from "../../utils/actions";
import { getCountries, getLocaleTxt } from "../../utils/api";

import "./Main.scss";
import Card from "../../components/Card/Card";

export default function Main() {
  const { locale, dict, user, searchValue, authForm } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [countries, setCountries] = useState([]);

  const setUser = (user) => {
    dispatch({ type: actions.SET_USER, user: user });
  };
  const closeAuthForm = () => {
    dispatch({
      type: actions.SET_AUTHFORM,
      payload: { isFormOpen: false },
    });
  };

  useEffect(() => {
    getLocaleTxt(locale).then((res) => dispatch({ type: actions.ADD_LOCALE, payload: res }));
    getCountries(locale).then((res) => setCountries(res));
  }, []);

  return (
    <>
      <Header />
      {authForm.isFormOpen && (
        <AuthForm isSignup={authForm.isSignup} setUser={setUser} closeForm={closeAuthForm} />
      )}
      <PromoBlock />
      <main className="main">
        <h2 className="countries">{dict.COUNTRIES}</h2>
        <Search />
        <div className="container cards-container">
          {countries.map((el, i) => {
            if (
              searchValue === "" ||
              el.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              el.capital.name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return <Card name={el.name} capital={el.capital.name} image={el.image} key={i} />;
            }
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
