import { BrowserRouter } from "react-router-dom";
import Routes from "./Router";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less'
import "./App.css";

moment.locale('zh-cn');

function App(props: {baseURL?: string}) {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter basename={props.baseURL || '/'}>
        <Routes/>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
