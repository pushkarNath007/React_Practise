// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { IndexRouteProps } from 'react-router-dom';
import Home from './ComponentRouter1/Home';
import About from './ComponentRouter1/About';
import Param from './ComponentRouter1/Param';
import Contact from './NestedRouting/Contact';
// import Company from './NestedRouting/Company';
import Other from './NestedRouting/Other';
import './NestedRouting/Nav.css';
import Main from './NestedRouting/Main';
// import Anil from './ComponentRouter1/Anil';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}>
            <Route path='/contact/:name' element={<Param/>}/>
          </Route>
          <Route path='/other' element={<Other />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
