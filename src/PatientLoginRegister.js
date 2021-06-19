function PatientLoginRegister(){
    return(
      <div className="box">
        <input type="checkbox" name="" className="toggle-btn"/>
              <div className="signup">
                  {/* <form> */}
                  <div className="input-groupp">
                      <span>
                          Username
                      </span>
                      
                      <input type="text" placeholder="Username" name="" className="inp"/>
                  </div>
                  <div className="input-groupp">
                      <span>
                          Email
                      </span>
                      <input type="email" placeholder="Email" name="" className="inp"/>
                  </div>
                  <div className="input-groupp">
                      <span>
                          Password
                      </span>
                      <input type="password" placeholder="Password" name="" className="form-control" id="inputPassword"/>
                  </div>
                  <div className="input-groupp">
                      <span>
                          DOB
                      </span>
                      <input type="date" name="" className="inp" />
                  </div>
                  <div className="input-groupp" style={{marginTop:'25px'}}>
                      <input type="submit" value="SignUp" className="inp submit-inp"/>
                  </div>
                  {/* </form> */}
                  
              </div>
              <div className="login">
                  {/* <form> */}
                  <div className="input-groupp">
                      <span>
                          Email
                      </span>
                      <input type="email" placeholder="Email" name="" className="inp"/>
                  </div>
                  <div className="input-groupp">
                      <span>
                          Password
                      </span>
                      <input type="password" placeholder="Password" name="" className="form-control" id="inputPassword2"/>
                  </div>
                 
                  <div className="input-groupp" >
                      <input type="submit" value="Login" className="inp submit-inp"/>
                  </div>
                  {/* </form> */}
                 
              </div>
              
      </div>
    )
  }
  
  export default PatientLoginRegister