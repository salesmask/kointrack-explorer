import React from 'react';
import './LoginForm.css';
import Sign_UP from './../../../assets/signup/google 1.svg';
import Icon_Eye from './../../../assets/signup/icon-eye-white.svg';
import Icon_Close from './../../../assets/signup/Group 8125.svg';

const LoginForm = () => {
    return (
        <>
            <div className="Login-blur-background"></div>
            <div className="Login_wrapper">
                <div className="container">
                    <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                        <div className="logo"></div>
                        <form className="rounded bg-white shadow p-5">
                            <div className="closing_icon_wrapper ">
                                <h3 className="text-dark fw-bolder fs-1 fw-bold mb-4 text-start cre_an_account ">
                                    {' '}
                                    Login{' '}
                                </h3>
                                <img
                                    src={Icon_Close}
                                    className="img-icon-close me-3  "
                                    width="22px"
                                    height="22px"
                                />
                            </div>

                            <div className="fw-normal  mb-5 text-start Login-font-color-form">
                                Don't have an account ?{' '}
                                <a
                                    href="#"
                                    className="text-primary fw-bold text-decoration-none"
                                >
                                    Sign Up Now
                                </a>
                            </div>

                            <div class="form-floating  mb-5">
                                <label
                                    for="floatingemail"
                                    className="sign_up_float_email"
                                >
                                    E-Mail Address
                                </label>
                                <input
                                    type="email"
                                    class="form-control Login_place_holder"
                                    id="floatingemail"
                                    placeholder="Enter your Email address"
                                />
                            </div>

                            <div class="form-floating mb-5 main_parent_Login_icon">
                                <label
                                    for="floatingpassword"
                                    className="sign_up_float_email "
                                >
                                    Password
                                </label>

                                <div className=" form-floating parent_icon_and_password_align  d-flex ">
                                    <input
                                        type="email"
                                        class="form-control Login_place_holder   "
                                        id="floatingpassword"
                                        placeholder="Enter your Password"
                                    />
                                    <img
                                        src={Icon_Eye}
                                        className="img-sign-up me-3 Login_image_position  "
                                        width="22px"
                                        height="22px"
                                    />
                                </div>
                            </div>

                            <div className="mt-2 text-end">
                                <a
                                    href="#"
                                    className="text-primary fw-bold text-decoration-none "
                                >
                                    Forgot Password ?
                                </a>
                            </div>

                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary submit____btn w-100 my-4 fs-3 rounded-pill "
                                >
                                    Login
                                </button>
                            </div>

                            <div className="text-center fw-normal Login__with text-muted Login-font-color-form  mb-3">
                                Or Login with
                            </div>

                            <button
                                type="submit"
                                className="btn btn-light submit____btn w-100 my-4 fs-3 border  rounded-pill"
                            >
                                <a
                                    href="#"
                                    className=" login-with w-100 mb-3 fs-3 "
                                >
                                    <img
                                        src={Sign_UP}
                                        className="img-sign-up me-3"
                                        width="22px"
                                        height="22px"
                                    />
                                    Google
                                </a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
