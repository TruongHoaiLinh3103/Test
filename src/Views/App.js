// import logo from './logo.svg';
import './App.css';
// import Mycomponents from '../Compoments/Mycomponents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Mycomponents from '../Compoments/Mycomponents';
import Home from './Home';
import Services from './Services';
function App() {
  return (
    <Router>
      <>
      <>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Mycomponents />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing/' element={<Home />} />
          <Route path='/contact' element={<Mycomponents />} />
        </Routes>
        {/* <Mycomponents /> */}
      </>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
    </Router>
  );
}

export default App;
