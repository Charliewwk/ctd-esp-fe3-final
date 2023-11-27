import { createContext, useReducer, useContext, useEffect } from "react";

const themeActions = {
  TOGGLE_THEME: "TOGGLE_THEME",
};

const favoriteActions = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  SET_FAVORITES_FROM_LOCAL_STORAGE: "SET_FAVORITES_FROM_LOCAL_STORAGE",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case themeActions.TOGGLE_THEME:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case favoriteActions.TOGGLE_FAVORITE:
      const user = action.payload;
      const favoriteUsers = state || [];
      const existingIndex = favoriteUsers.findIndex((u) => u.id === user.id);
      if (existingIndex !== -1) {
        favoriteUsers.splice(existingIndex, 1);
      } else {
        favoriteUsers.push(user);
      }
      localStorage.setItem("favoriteUsers", JSON.stringify(favoriteUsers));
      return [...favoriteUsers];
    case favoriteActions.SET_FAVORITES_FROM_LOCAL_STORAGE:
      const storedFavorites = JSON.parse(localStorage.getItem("favoriteUsers"));
      return storedFavorites || [];
    default:
      return state;
  }
};

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, themeDispatch] = useReducer(themeReducer, { darkMode: false });
  const [favoriteUsers, favoriteDispatch] = useReducer(favoriteReducer, []);

  useEffect(() => {
    favoriteDispatch({ type: favoriteActions.SET_FAVORITES_FROM_LOCAL_STORAGE });
  }, []);

  return (
    <GlobalContext.Provider value={{ theme, themeDispatch, favoriteUsers, favoriteDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal debe ser usado dentro de un GlobalProvider");
  }
  return context;
};
