import React from "react";
// import React, { Component } from 'react';

// by using statless Functional Componant

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light" style={{ margin: "10px" }}>
      <a className="navbar-brand" href="https">
        Navbar{" "}
        <span className="badge bg-pill bg-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;

// By Class
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light" style={{ margin: "1rem" }}>
//         <a className="navbar-brand" href="https">
//           Navbar{" "}
//           <span className="badge bg-pill bg-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
// export default Navbar;
