import { BrowserRouter } from "react-router-dom";
import Routes from "./Router";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less'
import "./App.css";
import { QiankunContext } from "./qiankun";
import { useState } from "react";

moment.locale('zh-cn');

function App(props: any) {
  const [qiankunState, setQiankunState] = useState(props.state)
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev 变更前的状态
    setQiankunState(state)
  });

  return (
    <QiankunContext.Provider value={{state: qiankunState, setGlobalState: props.setGlobalState }}>      
      <ConfigProvider locale={zhCN}>
        <BrowserRouter basename={props.baseURL || '/'}>
          <Routes/>
        </BrowserRouter>
      </ConfigProvider>
    </QiankunContext.Provider>
  );
}

export default App;
