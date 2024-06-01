import { NavLink } from "react-router-dom";
import routes from "@routes";
import "./index.css";
import { user, search, tesla, menu } from "@images";

const Index = () => {
  return (
    <header className="header-page">
      <span>
        <NavLink to={"https://www.tesla.com/"}>
          <img src={tesla} alt="Tesla logo" />
        </NavLink>
      </span>

      <nav>
        <ul>
          {routes?.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="user_about">
        <div className="search">
          <img src={search} alt="Search icon" />
          <input type="text" placeholder="Search" />
        </div>

        <button>
          <img src={user} alt="User icon" />
        </button>

        <button>
          <img src={menu} alt="Menu icon" />
        </button>
      </div>
    </header>
  );
};

export default Index;
