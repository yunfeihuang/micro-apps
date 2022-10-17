import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import App from "./App";
import "./index.css";
import renderWithQiankun, {
  QiankunProps,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let root: Root;
function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container
      ? (container.querySelector("#root") as Element)
      : (document.getElementById("root") as Element)
  );
  root.render(
    <React.StrictMode>
      <App {...props}/>
    </React.StrictMode>
  );
}

renderWithQiankun({
  mount(props) {
    console.log("mount");
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount");
    root?.unmount();
  },
  update: function (props: QiankunProps): void | Promise<void> {
    throw new Error("Function not implemented.");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
