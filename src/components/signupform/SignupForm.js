import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import './SignupForm.css';
import Sign_UP from './../../assets/signup/google 1.svg';
import Icon_Eye from './../../assets/signup/icon-eye-white.svg';
import Icon_Close from './../../assets/signup/Group 8125.svg';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function SignupForm({ close }) {
    const validations = Yup.object({
        email: Yup.string().required('Email is Required'),
        //   .matches(
        //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        //   )
        password: Yup.string()
            .required('Password is required')
            .min('6', 'Password should be min 6 characters')
            .max('10', 'Password should be max 10 characters'),
        confirmpassword: Yup.string()
            .required('Password do not match')
            .min('6', 'Password should be min 6 characters')
            .max('10', 'Password should be max 10 characters'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
        },
        onSubmit: (values) => {
            console.log('form submit', values);
        },
        validationSchema: validations,
    });

    // console.log('form values', formik.values)

    return (
        <>
            <div className="Signup-blur-background"></div>
            <div className="Signup_wrapper">
                <div className="container">
                    <div className="col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                        <div className="logo"></div>

                        <form
                            autoComplete="off"
                            onSubmit={formik.handleSubmit}
                            className="rounded bg-white shadow p-5"
                        >
                            <div className="closing_icon_wrapper ">
                                <h3 className="text-dark  mb-4 text-start cre_an_account ">
                                    {' '}
                                    Create an Account{' '}
                                </h3>

                                <Link to="/">
                                    <img
                                        onClick={() => close(false)}
                                        src={Icon_Close}
                                        className="img-icon-close me-3  "
                                        width="22px"
                                        height="22px"
                                    />
                                </Link>
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
                                    <Link to="/loginform">Login</Link>
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
                                    name="email"
                                    class="form-control sign_up_place_holder"
                                    id="email"
                                    placeholder="Enter your Email address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {formik.errors.email ? (
                                    <p className="errors">
                                        {formik.errors.email}
                                    </p>
                                ) : null}
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
                                        type="password"
                                        name="password"
                                        class="form-control sign_up_place_holder   "
                                        id="password"
                                        placeholder="Enter your Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    <img
                                        src={Icon_Eye}
                                        className="img-sign-up me-3 sign_up_image_position  "
                                        width="22px"
                                        height="22px"
                                    />
                                </div>
                                {formik.errors.password ? (
                                    <p className="errors">
                                        {formik.errors.password}
                                    </p>
                                ) : null}
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
                                        type="confirmpassword"
                                        name="confirmpassword"
                                        class="form-control sign_up_place_holder "
                                        id="confirmpassword"
                                        placeholder=" Confirm your Password"
                                        value={formik.values.confirmpassword}
                                        onChange={formik.handleChange}
                                    />
                                    <img
                                        src={Icon_Eye}
                                        className="img-sign-up me-3 sign_up_image_position  "
                                        width="22px"
                                        height="22px"
                                    />
                                </div>
                                {formik.errors.confirmpassword ? (
                                    <p className="errors">
                                        {formik.errors.confirmpassword}
                                    </p>
                                ) : null}

                                <p className="fw-normal  sign-up-font-color-form p-2">
                                    {' '}
                                    Password should contain both numbers and
                                    letters, and at least 8 characters long.
                                </p>
                            </div>

                            <div class="form-check text-dark mb-5">
                                <input
                                    class="form-check-input "
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
        </>
    );
}

// export default SignupForm;
