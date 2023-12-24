import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import AppContextProvider from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Switch>
          <Route path="/dang-nhap" exact component={SignIn} />
          <Main>
          </Main>
        </Switch>
      </div>
    </AppContextProvider>
  );
}

export default App;
