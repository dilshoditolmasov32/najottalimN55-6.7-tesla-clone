import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import {
  Model3,
  ModelS,
  ModelX,
  ModelY,
  SolarRoof,
  SolarPanels,
} from "../pages";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<App />}>
        <Route index element={<ModelS />} />
        <Route path="/model-3" element={<Model3 />} />
        <Route path="/model-x" element={<ModelX />} />
        <Route path="/model-y" element={<ModelY />} />
        <Route path="/solar-roof" element={<SolarRoof />} />
        <Route path="/solar-panels" element={<SolarPanels />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
