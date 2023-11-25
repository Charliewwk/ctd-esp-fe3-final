import { useGlobal } from "../../context/GlobalContext";

const LanguageSelector = () => {
  const { state, dispatch } = useGlobal();

  const changeLanguage = (newLanguage) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: newLanguage });
  };

  return (
    <div>
      <img className="language-icon" src="/src/assets/globe.svg" alt="Language" />
      <select
        id="language"
        value={state.language.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Portuguêse</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
