import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div
      style={{
        background: "#312A2A"
      }}
      className="main-area"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              style={{ height: "100vh" }}
              className="row d-flex justify-content-center align-items-center"
            >
              <div
                style={{
                  background: "#312A2A",
                  padding: 20,
                  borderRadius: 20,
                  boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.2)"
                }}
                className="col-4"
              >
                <div className=" d-flex justify-content-center">
                  <img
                    alt="brand-logo"
                    className="mb-3 brand-logo"
                    src="https://www.getd2.com/images/Logo.png"
                  />
                </div>
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="form-control email-input mb-3"
                />
                <input
                  name="password"
                  placeholder="Enter your password"
                  className="form-control mb-3"
                />
                <div className="d-flex justify-content-center">
                  <button style={{ width: "100%" }} className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
