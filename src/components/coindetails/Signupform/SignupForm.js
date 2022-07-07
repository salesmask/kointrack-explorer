import React from 'react';
import './SignupForm.css';
import Sign_UP from './../../../assets/signup/google 1.svg';
import Icon_Eye from './../../../assets/signup/icon-eye-white.svg';
import Icon_Close from './../../../assets/signup/Group 8125.svg';

const SignupForm = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                    <div className="logo"></div>
                    <form className="rounded bg-white shadow p-5">
                        <div className="closing_icon_wrapper ">
                            <h3 className="text-dark fw-bolder fs-1 fw-bold mb-4 text-start cre_an_account ">
                                {' '}
                                Create an Account{' '}
                            </h3>
                            <img
                                src={Icon_Close}
                                className="img-icon-close me-3  "
                                width="22px"
                                height="22px"
                            />
                        </div>

                        <p className="text-start d fw-normal sign-up-font-color-form">
                            Sign up and gain access to curated features like
                            watchlist and so on in two simple steps.
                        </p>

                        <div className="fw-normal  mb-5 text-start sign-up-font-color-form">
                            Already have an account ??{' '}
                            <a
                                href="#"
                                className="text-primary fw-bold text-decoration-none"
                            >
                                Login
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
                                class="form-control sign_up_place_holder"
                                id="floatingemail"
                                placeholder="Enter your Email address"
                            />
                        </div>

                        <div class="form-floating mb-5 main_parent_sign_up_icon">
                            <label
                                for="floatingpassword"
                                className="sign_up_float_email "
                            >
                                Password
                            </label>

                            <div className=" form-floating parent_icon_and_password_align  d-flex ">
                                <input
                                    type="email"
                                    class="form-control sign_up_place_holder   "
                                    id="floatingpassword"
                                    placeholder="Enter your Password"
                                />
                                <img
                                    src={Icon_Eye}
                                    className="img-sign-up me-3 sign_up_image_position  "
                                    width="22px"
                                    height="22px"
                                />
                            </div>
                        </div>

                        <div class="form-floating mb-5 main_parent_sign_up_icon">
                            <label
                                for="floatingconfirmpassword"
                                className="sign_up_float_email"
                            >
                                Confirm Password
                            </label>

                            <div className=" form-floating parent_icon_and_password_align  d-flex ">
                                <input
                                    type="password"
                                    class="form-control sign_up_place_holder "
                                    id="floatingconfirmpassword"
                                    placeholder=" Confirm your Password"
                                />
                                <img
                                    src={Icon_Eye}
                                    className="img-sign-up me-3 sign_up_image_position  "
                                    width="22px"
                                    height="22px"
                                />
                            </div>

                            <p className="fw-normal  sign-up-font-color-form p-2">
                                {' '}
                                Password should contain both numbers and
                                letters, and at least 8 characters long.
                            </p>
                        </div>

                        <div class="form-check text-dark mb-5">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="invalidCheck"
                            />
                            <label
                                class="form-check-label text-start sign-up-font-color-form fw-normal"
                                for="invalidCheck"
                            >
                                I agree to kointrack
                                <a
                                    href="#"
                                    className="text-primary fw-bold text-decoration-underline p-2"
                                >
                                    Terms and Conditions
                                </a>{' '}
                                and
                                <a
                                    href="#"
                                    className="text-primary fw-bold text-decoration-underline p-2"
                                >
                                    Privacy Policy
                                </a>
                                . By creating an account, I also agree to
                                receive email updates from kointrack.
                            </label>
                        </div>

                        {/* <div className="mt-2 text-end">
                            <a
                                href="#"
                                className="text-primary fw-bold text-decoration-none "
                            >
                                Forgot Password ?
                            </a>
                        </div> */}
                        <div className="mb-3">
                            <button
                                type="submit"
                                className="btn btn-primary submit____btn w-100 my-4 fs-3 rounded-pill "
                            >
                                Create Account
                            </button>
                        </div>

                        <div className="text-center fw-normal sign__up__with text-muted sign-up-font-color-form  mb-3">
                            Or Sign Up with
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
    );
};

export default SignupForm;
