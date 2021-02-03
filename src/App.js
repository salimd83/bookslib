import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import SignIn from "./components/SignIn";
import "./styles.css";
import { ToasterProvider } from "./ui/ToasterContext";
import { AuthProvider } from "./authContext";
import Header from "./components/Header";
import PrivateRoute from "./PrivateRoute";
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <ToasterProvider>
          <div className="App">
            <Header />

            <Switch>
              <Route path="/" exact>
                <h2>Welcome to Books lib</h2>
              </Route>
              <PrivateRoute path="/books">
                <BookList />
              </PrivateRoute>
              <PrivateRoute path="/book/:id">
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
