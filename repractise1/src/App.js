// // import BasicClass from "./BasicClass";
import React from "react";

import { Routes, Route } from "react-router-dom";
// // import {useState} from 'react'
// // import State1 from "./State1";
// // import LifeCycle from "./LifeCycle";
// // import Flife from "./Flife";
// // import Purecomp from "./Purecomp";
// // import Fpure from "./Fpure";
// // import Table from "./Table";
// import Form from "./Form";
// import Func from "./Func";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function App(){
//   // const[data,setdata]=useState({name:'rishab',id:0})
//   // const[edata,seetdata]=useState(1)
//   // function run(){
//   //  setdata({...data,id:data.id+1})
//   // }
//   function func(){
//     return <Form/>
//   }
//   return(
//     // <BasicClass  func={data}/>
//     // <State1 func={{data,edata}} func1={run} />
//     // <LifeCycle/>
//     // <Flife/>
//     // <Purecomp/>
//     // <Fpure/>
//     // <Table/>
//     // <Form/>
//       // <Func func={func}/>
//       <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }
import Main from "./Main";
import Form from "./Form";
import Register from "./Register";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} exact>
          <Route index element={<Form />} />
          <Route path="/about" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
