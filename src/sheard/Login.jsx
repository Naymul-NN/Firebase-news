import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const Login = () => {
  const location= useLocation();
  console.log(location);
  const navigate=  useNavigate();
    
    const {userLogin} = useContext(authContext)

    const handleLogin=(e)=>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        e.target.reset()
        userLogin(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location.state: "/");
        })
        .catch(error => {
            console.error(error)
        })
   };


    return (
        <div>
            <Navbar></Navbar>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>If you are new here! <Link to='/register' className="text-green-400 font-bold" >Register</Link></p>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;