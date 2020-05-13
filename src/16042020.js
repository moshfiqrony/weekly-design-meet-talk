import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const sms = (
    <Fragment>
      <span className="p-0 m-0">this is a simple text </span>
      <strong>This is a bold block </strong>
      <em>This is a italic block </em>
      <code>This is a code block</code>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="form-control" contentEditable>
        {sms}
      </div>

      <div className="card-new">
        <div className="card-title-new">This is card title</div>
        <div className="card-body-new">
          <div className="row">
            <div className="col-4 bg-primary">
              this is col-4
              <div className="row">this row</div>
              <div className="row">this row</div>
              <div className="row">this row</div>
              <div className="row">this row</div>
              <div className="row">this row</div>
            </div>
            <div className="col-8 bg-warning">
              this is col-8
              <div className="row">this row</div>
              <div className="row">this row</div>
              <div className="row">this row</div>
              <div className="row">this row</div>
              <div className="row">this row</div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="top-nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <section id="home" className="home">
          <div className="home-left">
            <div className="home-left-left">home-left-left</div>
            <div className="home-left-right">home-left-right</div>
          </div>
          <div className="home-right">I am home Right</div>
        </section>

        <section id="about" className="about">
          this is about
        </section>
      </div>
    </Fragment>
  );
}
