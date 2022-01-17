import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NotFound from "./components/not-found";
import RenderContent from "./components/renderContent";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={RenderContent} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;
