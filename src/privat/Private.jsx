import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
  const location = useLocation();

  const {user,loading}= useContext(authContext);
if(loading){
    return <span className="loading loading-dots loading-lg"></span>
}


  if(user){
       return children;
  }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default Private;