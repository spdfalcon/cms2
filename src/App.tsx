import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./router/routes";
function App() {
const rout = useRoutes(routes)
  return (
    <>
      <div className="">
        {rout}
      </div>
    </>
  );
}

export default App;
