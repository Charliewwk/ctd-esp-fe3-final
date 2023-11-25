import { Outlet } from "react-router-dom";
import "./main.css"

const Main = () => {
  return (

    <main className="margin-top flex-shrink-0">
      <div className="container">
        <Outlet />
      </div>
    </main>

    )
}

export default Main