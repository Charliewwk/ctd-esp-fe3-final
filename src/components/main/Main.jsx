import { Outlet } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <main className="margin-top-bottom">
      <Outlet />
    </main>
  );
};

export default Main;
