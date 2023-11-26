import { createContext, useReducer, useContext, useEffect } from "react";


const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    case "TOGGLE_FAVORITE":
      const user = action.payload;
      const favoriteUsers = state.favoriteUsers || [];
      const existingIndex = favoriteUsers.findIndex((u) => u.id === user.id);
      if (existingIndex !== -1) {
        favoriteUsers.splice(existingIndex, 1);
      } else {
        favoriteUsers.push(user);
      }
      localStorage.setItem("favoriteUsers", JSON.stringify(favoriteUsers));
      return { ...state, favoriteUsers: [...favoriteUsers] };
    default:
      return state;
  }
};

const initialState = {
  theme: { darkMode: false },
  favoriteUsers: [], // Agregamos el estado de favoritos
};

const rootReducer = (state, action) => ({
  theme: themeReducer(state.theme, action),
  favoriteUsers: state.favoriteUsers, // Mantenemos el estado de favoritos
});

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteUsers"));
    if (storedFavorites) {
      dispatch({ type: "TOGGLE_FAVORITE", payload: storedFavorites });
    }
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
