import React, { Fragment } from "react";
import PerfectScroolBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Input, Button } from "antd";

const Layout = () => {
  return (
    <div style={{ display: "flex", background: "#FAF9F7" }}>
      <div className="left" />
      <div className="content">
        <PerfectScroolBar
          style={{
            maxHeight: "100vh",
            height: "100vh"
          }}
        >
          <div
            style={{ borderRadius: 20, margin: 100 }}
            className="card shadow-lg"
          >
            <div className="card-body">
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <label>Username</label>
              <Input />
              <Button>Submit</Button>
            </div>
          </div>
        </PerfectScroolBar>
      </div>
      {/* <div className="right" /> */}
    </div>
  );
};

export default Layout;
