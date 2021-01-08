import "./App.css";
import Router from "./route/book";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
