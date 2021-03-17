import actions from "./actions";

const getData = (key, initialValue) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : initialValue;
};

const initialState = {
  locale: getData("lang", "en_US"),
  dict: {},
  user: getData("user", null),
  searchValue: ''
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_LOCALE: {
      return {
        ...state,
        dict: action.payload,
      };
    }
    case actions.SET_USER: {
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: getData("user", null),
      };
    }
    case actions.REMOVE_USER: {
      localStorage.setItem("user", JSON.stringify(null));
      return {
        ...state,
        user: getData("user", null),
      };
    }
    case actions.SEARCH: {
      return {
        ...state,
        searchValue: action.payload,
      }
    }
    default:
      return state;
  }
}
