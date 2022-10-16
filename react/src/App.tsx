import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { getRoutes } from "./Router";
import "./App.css";
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));

const routes = getRoutes();

const BaseRoutes = () => useRoutes(routes.map((route) => {
  return {
    path: route.path,
    element: <Suspense fallback={<div>loading</div>}><route.component /></Suspense>
  }
}))

function App(props: {routerBase: string}) {
  return (
    <BrowserRouter basename={props.routerBase || '/'}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
