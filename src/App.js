import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import UserEditPage from "./app/components/page/userEditPage/userEditPage";
import NavBar from "./app/components/ui/navBar";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";
import NotFound from "./app/layouts/not-found";
import Users from "./app/layouts/users";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route
                    path="/users/:userId?/edit"
                    render={(props) => <UserEditPage {...props} />}
                />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;
