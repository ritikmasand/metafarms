import Home from "../src/component/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import React, { createContext, useState } from "react";
import About from "./component/Home/About/About";
import Dashboard from "./component/Dashoboard/Dashboard/Dashboard";
import { getDecodedUser } from "./component/Login/LoginManager";
import LoginModal from "./component/Login/LoginModal";
import PrivateRoute from "./component/Login/PrivateRoute";
import NotFound from "./component/NotFound";
import Aboutus from "./component/aboutUs/Aboutus";
import ControlledCarousel from "./component/aboutUs/ControlledCarousel";
import Contact from "./component/Home/Contact/Contact";
import Services from "./component/Home/Services/Services";
import Viewmore from "./component/Home/Services/viewmore";
import Sponsors from "./component/aboutUs/sponsors/sponsors";
import Softwareanddevelopment from "./component/Home/Services/softwareanddevelopment";
import Traininganddevelopment from "./component/Home/Services/trainiganddevelopment";
import Newservice from "./component/newservice";
import Newcontact from "./component/newcontact";
import ContactUs from "./component/contact3/ContactUs";
import Login from "./component/Shared/Navbar/Login";
import BasicExample from "./component/Farmtable";
// import Main from './component/views/Form/Main/Main';

export const UserContext = createContext();

const App = () => {
  const [admin, setAdmin] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [user, setUser] = useState(getDecodedUser());
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        selectedService,
        setSelectedService,
      }}
    >
      <div className="mainpage">
        <Routes>
          {/* <Main/> */}
          <Route path="/" element={<Aboutus />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/aboutpage" element={<Aboutus />} /> */}
          <Route path="/Supplierlogin" element={<LoginModal />} />
          <Route path="/GrowerLogin" element={<LoginModal />} />
          <Route path="/Aboutus" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact3" element={<ContactUs />} />
          <Route path="/farmtable" element={<BasicExample />} />
          {/* <Route path="/Services" element={<Services/>} /> */}

          {/* <Login /> */}
          <Route
            path="/Newservice/farming-consultancy"
            element={<Viewmore />}
          />
          <Route
            path="/Newservice/software-development"
            element={<Softwareanddevelopment />}
          />
          <Route
            path="/Newservice/training-and-development-services"
            element={<Traininganddevelopment />}
          />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/Newservice" element={<Newservice />} />
          <Route path="/Newcontact" element={<Newcontact />} />
          {/* <Route path="/Buyerlogin" element={<Buyerlogin />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}

          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute redirectTo="/login">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
