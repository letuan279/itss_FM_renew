import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import AppContextProvider from "./context/AppContext";

import Nhom from "./components/nhom/Nhom";
import NhomChiTiet from "./components/nhom/NhomChiTiet";
import MonDo from "./components/mondo/MonDo";
import CongThuc from "./components/congthuc/CongThuc";
import DiCho from "./components/dicho/DiCho";
import Kho from "./components/kho/Kho";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Switch>
          <Route path="/dang-nhap" exact component={SignIn} />
          <Main>
            <Route path="/nhom" exact component={Nhom} />
            <Route path="/nhom/:id" exact component={NhomChiTiet} />
            <Route path="/mon-do" exact component={MonDo} />
            <Route path="/cong-thuc" exact component={CongThuc} />
            <Route path="/di-cho" exact component={DiCho} />
            <Route path="/kho" exact component={Kho} />
            <Redirect from="*" to="/nhom" />
          </Main>
        </Switch>
      </div>
    </AppContextProvider>
  );
}

export default App;
