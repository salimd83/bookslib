import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./styles.css";
import { ToasterProvider } from "./ui/ToasterContext";
import { AuthProvider } from "./authContext";
import PrivateRoute from "./PrivateRoute";
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <ToasterProvider>
          <div className="App">
            <Switch>
              <PrivateRoute path="/" exact>
                <Home />
              </PrivateRoute>
              <PrivateRoute path="/products">
                <BookList />
              </PrivateRoute>
              <PrivateRoute path="/products/:id">
                <BookDetails />
              </PrivateRoute>
              <Route path="/signin">
                <SignIn />
              </Route>
            </Switch>
          </div>
        </ToasterProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
