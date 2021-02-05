import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
    return (
      <Layout>
        <Header class="header" > Customer List </Header>
        <Content>
          <Switch>
            <Route path="/">
              <Customers />
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  };
  
export default App;