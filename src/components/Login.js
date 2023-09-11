import React from "react";

const Login = () => {
  return (
    <div className="login-container">
      <section className="newsletter-section loginSection">
        <div className="anim-icons full-width">
          <span className="icon icon-shape-3 wow fadeIn"></span>
          <span className="icon icon-line-1 wow fadeIn"></span>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4"></div>
            <div className="form-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="contact-form">
                  <div className="sec-title text-center">
                    <div className="text">Existing Member? Login</div>
                  </div>
                  <form
                    method="post"
                    action="login_submit.php"
                    className="form"
                    id="contact-form"
                  >
                    <div className="row clearfix">
                      <div
                        className="col-lg-12 col-md-12 col-sm-12 form-group"
                        id="emailerror"
                      >
                        <input
                          type="text"
                          autofocus
                          name="txtusername"
                          placeholder="Email ID / Username / Mobile No."
                          tabindex="1"
                          required
                          value=""
                        />
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <input
                          type="password"
                          name="txtpassword"
                          placeholder="Enter Password"
                          maxlength="35"
                          id="pass"
                          tabindex="2"
                          required
                          value=""
                        />
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9 mb-2 AcknowledgeSection">
                        <label
                          className="labelcss"
                          style={{ verticalAlign: `middle` }}
                        >
                          <input
                            type="checkbox"
                            checked
                            style={{ verticalAlign: `middle` }}
                          />
                        </label>
                        I Agree{" "}
                        <a
                          href="#"
                          target="_blank"
                          tabindex="3"
                        >
                          <u>Terms of Service </u>
                        </a>{" "}
                        <span className="privacyPolicy">
                          {" "}
                          And
                          <a
                            href="#"
                            target="_blank"
                          >
                            <u> Privacy Policy*</u>
                          </a>
                        </span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9 mt-2 keepin_Sign">
                        <li className="switch-agileits float-left"></li>
                        <label
                          className="labelcss"
                          style={{ verticalAlign: `middle` }}
                        >
                          <input
                            type="checkbox"
                            style={{ verticalAlign: `middle` }}
                            name="remember_me"
                            value="1"
                            tabindex="4"
                          />
                          <span className="slider-switch round"></span>
                          Keep me signed in
                        </label>
                      </div>

                      <div className="col-lg-3 col-md-3 col-sm-3 mt-2 troubleSection">
                        <a
                          href="#"
                          className="ml-4"
                          tabindex="5"
                        >
                          Trouble login in?
                        </a>
                      </div>

                      <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                        <div className="btn-box">
                          <button
                            className="theme-btn btn btn-style-one"
                            tabindex="6"
                            type="submit"
                            name="submit"
                            style={{ width: `100%` }}
                          >
                            <span className="btn-title">Log In</span>
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-9 mt-3 registerSection">
                        <span className="">
                          {" "}
                          New Candidate Register ?
                          <a
                            href="#"
                            tabindex="7"
                          >
                            {" "}
                            SignUp
                          </a>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;




