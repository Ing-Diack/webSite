import { Navigate, useLocation } from "react-router-dom";
import AuthConsummer from "../../hooks";

function RequireAuth ({children}){
        const location = useLocation();
        const {authed}= AuthConsummer();

    return(authed ? children : <Navigate to="/" replace state={{path : location.pathname}}  />)
}
export default RequireAuth;