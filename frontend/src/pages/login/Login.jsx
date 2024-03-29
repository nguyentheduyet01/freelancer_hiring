import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAction } from "../../reducer/actions/accountAction";
import { showToastMessageError, showToastMessageSuccess } from "../../utils/toastify";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const { account: accountUser, error } = useSelector((state) => state.account);
  const [account, setAccount] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search.split("=")[1];

  const loginHandle = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(account));
  };

  useEffect(() => {
    if (accountUser?.isSuccess) {
      showToastMessageSuccess("Đăng nhập thành công");
      if (search) {
        navigate(`/${search}`);
      } else {
        navigate("/");
      }
    }
    if (error === true) {
      showToastMessageError("Tài khoản hoặc mật khẩu sai");
    }
  }, [accountUser, navigate, location, error, search]);

  return (
    <>
      <section className='vh-500'>
        <div className='container py-5 h-60'>
          <div className='row d-flex align-items-center justify-content-center h-100'>
            <div className='col-md-8 col-lg-7 col-xl-6'>
              <Card.Img
                className='img-fluid'
                style={{ background: "wheat", borderRadius: "12px" }}
                alt='Phone image'
                  src={
                    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  }
              />
            </div>
            <div className='col-md-7 col-lg-5 col-xl-5 offset-xl-1'>
              <form style={{ width: "70%" }} onSubmit={loginSubmit} method='POST'>
                <div className='form-outline '>
                  <input
                    type='email'
                    id='form1Example13'
                    className='form-control'
                    name='username'
                    onChange={loginHandle}
                  />
                  <label className='form-label' htmlFor='form1Example13'>
                    Email
                  </label>
                </div>

                <div className='form-outline '>
                  <input
                    type='password'
                    id='form1Example23'
                    className='form-control'
                    name='password'
                    onChange={loginHandle}
                  />
                  <label className='form-label' htmlFor='form1Example23'>
                    Mật khẩu
                  </label>
                </div>

                <div className='d-flex justify-content-around align-items-center mb-2'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='form1Example3'
                    />
                    <label className='form-check-label' htmlFor='form1Example3'>
                      {" "}
                      Nhớ{" "}
                    </label>
                  </div>
                  <span>Quên mật khẩu?</span>
                </div>

                <button
                  type='submit'
                  className='btn btn-lg btn-block'
                  style={{ width: "100%", backgroundColor: "#557977", color: "white" }}
                >
                  Sign in
                </button>

                <div className='divider d-flex align-items-center my-2'>
                  <p className='text-center fw-bold mx-3 mb-0 text-muted'>OR</p>
                </div>

                <button
                  className='btn btn-primary'
                  style={{ backgroundColor: "#3b5998", width: "100%" }}
                  role='button'
                >
                  <i className='fab fa-facebook-f me-2'></i>Continue with Facebook
                </button>
                <button
                  className='btn btn-primary '
                  style={{ backgroundColor: "#dd4b39", width: "100%", marginTop: "20px" }}
                  role='button'
                >
                  <i className='fab fa-twitter me-2'></i>Continue with Gmail
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
