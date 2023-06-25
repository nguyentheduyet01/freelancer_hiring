import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { registerAction } from "../../reducer/actions/accountAction";
import { showToastMessageError, showToastMessageSuccess } from "../../utils/toastify";
import "./Register.css";

const Register = () => {
  const dispatch = useDispatch();
  const { account: accountUser, error } = useSelector((state) => state.account);
  const [account, setAccount] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search.split("=")[1];

  const registerHandle = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    // dispatch(registerAction(account));
  };

  useEffect(() => {
    // if (accountUser?.isSuccess) {
    //   showToastMessageSuccess("Đăng nhập thành công");
    //   if (search) {
    //     navigate(`/${search}`);
    //   } else {
    //     navigate("/");
    //   }
    // }
    if (error === true) {
      showToastMessageError("Tài khoản hoặc mật khẩu sai");
    }
  }, [accountUser, navigate, location, error, search]);

  return (
    <>
      <section className="h-100 ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      // style={{"border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;"}}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Đăng Ký</h3>

                      <div className="row">
                        <div className="">
                          <div className="form-outline">
                            <input type="text" id="name" className="form-control form-control-lg" />
                            <label className="form-label" for="name">
                              Họ và tên
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="">
                          <div className="form-outline">
                            <input
                              type="text"
                              id="email"
                              className="form-control form-control-lg"
                            />
                            <label className="form-label" for="email">
                              Email
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="sdt" className="form-control form-control-lg" />
                        <label className="form-label" for="sdt">
                          Số điện thoại
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="address" className="form-control form-control-lg" />
                        <label className="form-label" for="address">
                          Địa chỉ
                        </label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Giới tính: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label className="form-check-label" for="femaleGender">
                            Nam
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Nữ
                          </label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" for="otherGender">
                            Khác
                          </label>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="sdt" className="form-control form-control-lg" />
                        <label className="form-label" for="sdt">
                          Số điện thoại
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="pass" className="form-control form-control-lg" />
                        <label className="form-label" for="pass">
                          Mật khẩu
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" id="pass" className="form-control form-control-lg" />
                        <label className="form-label" for="pass">
                          Xác nhận Mật khẩu
                        </label>
                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-warning btn-lg ms-2">
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
