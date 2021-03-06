 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './HomePage.css';
import './ContactUs.css';
import App from './App';
import './TrialHp.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './HomePage';
import {BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import {BrowserRouter as Router,Switch} from 'react-router-dom';
import Pathology from './Pathology';
import Speciality from './Speciality';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TrialHp from './TrialHp';
import RoomCategories from './RoomCategories'
import 'bootstrap/dist/css/bootstrap.min.css'
import PatientLoginRegister from './PatientLoginRegister'
import TrialDoctorLoginRegister from './TrialDoctorLoginRegister';
import './TrialDoctor.css'
import './PostAQuery.css'
import PostAQuery from './PostAQuery';

ReactDOM.render(
  <div>
   {/* <React.StrictMode>
     <App />
   </React.StrictMode>, */}
   <BrowserRouter>
   <Router>
       <Switch>
		      <Route exact path="/" component={TrialHp}/>
          <Route exact path="/ContactUs" component={ContactUs}/>
				  <Route exact path="/AboutUs" component={AboutUs}/>
          <Route exact path="/Speciality" component={Speciality}/>
          <Route exact path="/Pathology" component={Pathology}/>
          <Route exact path="/PostAQuery" component={PostAQuery}/>
          <Route exact path="/DoctorLoginRegister" component={TrialDoctorLoginRegister}/>
          <Route exact path="/PatientLoginRegister" component={PatientLoginRegister}/>
          <Route exact path="/RoomCategories" component={RoomCategories}/>
	      </Switch>
      </Router>
   
  </BrowserRouter>
  
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
