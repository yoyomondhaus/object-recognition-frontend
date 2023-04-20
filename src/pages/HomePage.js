import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

function HomePage() {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            <h1>Home Page</h1>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
    );
}

export default HomePage;