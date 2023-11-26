import { Outlet } from "react-router-dom";
import "./main.css"

const Main = () => {
  return (

    <main className="margin-top-bottom flex-shrink-0">
        <Outlet />
    </main>

    )
}

export default Main