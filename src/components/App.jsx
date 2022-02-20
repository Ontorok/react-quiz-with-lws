import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Videos from "./Videos";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute exact path="/signup" component={SignUp} />
            <PublicRoute exact path="/login" component={Login} />

            <PrivateRoute
              exact
              path="/videos/:instructorId"
              component={Videos}
            />
            <PrivateRoute exact path="/quiz/:videoId" component={Quiz} />
            <PrivateRoute exact path="/result/:videoId" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
