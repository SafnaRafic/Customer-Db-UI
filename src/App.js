import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
    return (
      <Layout>
        <Header> </Header>
        <Content>
          <Switch>
            <Route path="/">
              <h1>Customers List</h1>
              <Customers />
            </Route>
          </Switch>
        </Content>
      </Layout>
    );
  };
  
export default App;





























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;