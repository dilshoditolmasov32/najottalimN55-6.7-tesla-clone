import { Outlet } from "react-router-dom";
import {Header, Footer} from "./components"

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
