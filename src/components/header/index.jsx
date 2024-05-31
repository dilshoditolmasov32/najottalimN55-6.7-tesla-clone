import { NavLink } from "react-router-dom";
import routes from "@routes";
import "./index.css";
import { user, search, tesla, menu } from "@images";

const Index = () => {
  return (
    <header className="header-page">
      <span>
        <NavLink to={"https://www.tesla.com/"}>
          <img src={tesla} alt="tesla-logo" />
        </NavLink>
      </span>

      <ul>
        {routes?.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>

      <div className="user_about">
        <div className="search">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>

        <button>
          <img src={user} alt="user-img" />
        </button>

        <button>
          <img src={menu} alt="menu-img" />
        </button>
      </div>
    </header>
  );
};

export default Index;
