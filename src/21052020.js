import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "antd";

export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleLogin = e => {
    this.setState({
      username: "",
      password: "",
      
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Fragment>
        <div className="container">
          <Input
            className="form-control mb-3 mt-3"
            name="username"
            placeholder="Enter username*"
            value={username}
            onChange={this.handleChange}
          />
          <Input
            className="form-control mb-3"
            name="password"
            type="password"
            value={password}
            placeholder="Enter password*"
            onChange={this.handleChange}
          />
          <button onClick={this.handleLogin} className="btn btn-primary">
            LOGIN
          </button>
        </div>
      </Fragment>
    );
  }
}

// export default function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

// const handleChange = e => {
//   const { name, value } = e.target;
//   if (name === "username") {
//     setUsername(value);
//   } else {
//     setPassword(value);
//   }
// };
// const handleLogin = e => {
//   if (true) {
//     setUsername("");
//     setPassword("");
//   }
// };
//   return (
//     <Fragment>
// <div className="container">
//   <input
//     className="form-control mb-3 mt-3"
//     name="username"
//     placeholder="Enter username*"
//     value={username}
//     onChange={handleChange}
//   />
//   <input
//     className="form-control mb-3"
//     name="password"
//     type="password"
//     value={password}
//     placeholder="Enter password*"
//     onChange={handleChange}
//   />
//   <button onClick={handleLogin} className="btn btn-primary">
//     LOGIN
//   </button>
// </div>
//     </Fragment>
//   );
// }
