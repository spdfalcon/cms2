import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./router/routes";
import { useEffect } from "react";
import i18next from "i18next";
function App() {
  const rout = useRoutes(routes);
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      i18next.changeLanguage(lang);
      if (lang === "fa"){
        document.body.dir = "rtl";
      }else{
        document.body.dir = "ltr";
      }
    } else {
      localStorage.setItem("lang", "fa");
      i18next.changeLanguage("fa");
      document.body.dir = "rtl";
    }
  }, []);
  return (
    <>
      <div className="">{rout}</div>
    </>
  );
}

export default App;
