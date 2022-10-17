import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import { getRoutes } from "./Router";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less'

moment.locale('zh-cn');
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
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename={props.routerBase || '/'}>
        <BaseRoutes/>
        {/* <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>loading</div>}>
                <Home />
              </Suspense>
            }
          />
        </Routes> */}
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
