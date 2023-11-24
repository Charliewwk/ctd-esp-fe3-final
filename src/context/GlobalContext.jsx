import { createContext, useReducer, useContext } from "react";

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const languageReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

const initialState = {
  theme: { darkMode: false },
  language: { language: "en" },
};

const rootReducer = (state, action) => ({
  theme: themeReducer(state.theme, action),
  language: languageReducer(state.language, action),
});

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
