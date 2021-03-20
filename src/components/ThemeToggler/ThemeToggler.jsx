import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../utils/actions';

import './ThemeToggler.scss';

export default function ThemeToggler() {
  const { darkTheme } = useSelector(state => state)

  const dispatch = useDispatch();

  const changeTheme = (e) => {
    dispatch({ type: actions.CHANGE_THEME, payload: e.target.checked })
  }

  return (
    <div className="theme-toggler-wrapper">
      <div className="toggle">
        <input className="toggle-input" type="checkbox" defaultChecked={darkTheme} onChange={changeTheme}/>
        <div className="toggle-bg"></div>
        <div className="toggle-switch">
          <div className="toggle-switch-figure"></div>
          <div className="toggle-switch-figureAlt"></div>
        </div>
      </div>
    </div>
  );
}
