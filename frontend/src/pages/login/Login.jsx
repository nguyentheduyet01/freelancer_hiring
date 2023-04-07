import React from "react";
import { Card } from "react-bootstrap";

import "./Login.css";

const Login =() =>{
    return(
        <>
        <section class="vh-500">
  <div class="container py-5 h-60">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <Card.Img class="img-fluid" style={{background:"wheat", borderRadius:"12px"}} alt = "Phone image" src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"} />
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form style={{width:"70%"}}>
          <div class="form-outline ">
            <input type="email" id="form1Example13" class="form-control" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          <div class="form-outline ">
            <input type="password" id="form1Example23" class="form-control " />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-2">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          <button type="submit" class="btn btn-primary  btn-lg btn-block" style={{width:"100%"}}>Sign in</button>

          <div class="divider d-flex align-items-center my-2">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <button class="btn btn-primary" style={{backgroundColor :"#3b5998", width:"100%"}} 
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </button>
          <button class="btn btn-primary " style={{backgroundColor :"#dd4b39", width:"100%", marginTop:"20px"}} 
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Gmail</button>

        </form>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Login;