import { Redirect } from "react-router-dom";

export const Logout = () => {
    localStorage.removeItem("KEY_USER");
    return (
        <Redirect push to="/login" />
    )
}
