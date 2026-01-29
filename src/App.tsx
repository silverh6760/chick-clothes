import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/Layout";
import { routesArray } from "./router/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {routesArray.map((page, index) => (
              <Route key={index} path={page.path} element={page.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
