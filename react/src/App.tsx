import { BrowserRouter } from "react-router-dom";
import { useReducer, useEffect, Dispatch } from "react";
import Routes from "./Router";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.less'
import "./App.css";
import * as qiankun from "./qiankun";

moment.locale('zh-cn');

function App(props: any) {
  const [state, dispatch] = useReducer(qiankun.reducer, qiankun.initState)
  const $dipatch: Dispatch<qiankun.Action> = (action: qiankun.Action) => {
    props.setGlobalState(action.payload)
    return dispatch(action)
  }
  useEffect(() => {
    dispatch({type: '', payload: props.state})
  }, [])
  props.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev 变更前的状态
    dispatch({type: '', payload: state})
  });

  return (
    <qiankun.Context.Provider value={{state, dispatch: $dipatch }}>      
      <ConfigProvider locale={zhCN}>
        <BrowserRouter basename={props.baseURL || '/'}>
          <Routes/>
        </BrowserRouter>
      </ConfigProvider>
    </qiankun.Context.Provider>
  );
}

export default App;

