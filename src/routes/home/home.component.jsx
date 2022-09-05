import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./home.styles.scss";

const Home = () => {
  return (
    <>
      <div className="header">
        <Logo className="logo" alt="logo" />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
