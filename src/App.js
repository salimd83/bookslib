import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import "./styles.css";
import { ToasterProvider } from "./ui/ToasterContext";

function App() {
  return (
    <Router>
      <ToasterProvider>
        <div className="App">
          <h1>
            <Link to="/">Books library</Link>
          </h1>

          <Switch>
            <Route path="/" exact>
              <BookList />
            </Route>
            <Route path="/book/:id">
              <BookDetails />
            </Route>
          </Switch>
        </div>
      </ToasterProvider>
    </Router>
  );
}

export default App;
