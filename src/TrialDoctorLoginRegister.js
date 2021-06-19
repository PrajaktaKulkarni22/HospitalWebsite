import { Link } from 'react-router-dom'

function TrialDoctorLoginRegister(){
    return(
		<div>

		<div class="navbar1">
          <button type="button" id="phonenobtn11">
            <img
              id="callicon1"
              src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png"
            />
            020252515151
          </button>

          {/* <button type="button" id="phonenobtn2">
            <div class="slash">
              <b>/</b>
            </div>
            1234567892
          </button> */}
        </div>

		<div class="backhome"></div>
        <div className="backhome-text">
            <h3 id="aboutus">Doctor Registration</h3>
            <Link to="/" id="homelink"><h3>Home  <span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext">Doctor Registration</h3>
        </div>
        {/* <div className="register-text">
			<h1>Registation Form</h1>
		</div> */}
		<div class="form-wrapper" style={{marginTop:'220px'}}> 
			<form class="fcorn-register container" style={{backgroundColor:'#1c55ac'}} >
				<p class="register-info">Note: All fields are required.</p>
				<div class="row">
					<p class="col-md-6"><input type="text" placeholder="First Name" required /></p>
					<p class="col-md-6"><input type="text" placeholder="Last Name" required /></p>
				</div>
				<p><input type="email" placeholder="Email Address" required />
				   <span class="extern-type" style={{color:'#dcdcdc',fontWeight:'bolder'}}>We'll keep this private.</span>
				</p>
				<p><input type="password" placeholder="Password" required />
					<span class="extern-type" style={{color:'#dcdcdc',fontWeight:'bolder'}}>Atleast 8 characters long.</span>
				</p>
				<p><input type="password" placeholder="Verify Password" required className="mb-5"/></p>
				<div class="row">
					<p class="col-md-4"><input type="text" placeholder="Date (dd)" required /></p>
					<p class="col-md-4"><input type="text" placeholder="Month (mm)" required /></p>
					<p class="col-md-4"><input type="text" placeholder="Year (yyyy)" required /></p>
				</div>
				<div class="row">
					<p class="col-md-6 city-wrap">
						<select>
							<option value="0" selected disabled>City</option>
							<option value="1">Pune</option>
							<option value="2">Mumbai</option>
							<option value="3">Delhi</option>
							<option value="4">Hyderabad</option>
							<option value="5">Bangalore</option>
							<option value="6">Ahmedabad</option>

						</select>
					</p>
					<p class="col-md-6 country-wrap">
						<select>
							<option value="0" selected disabled>Country</option>
							<option value="1">India Only</option>
							<option value="2">Outside India</option>
						</select>
					</p>
          <p class="col-md-6 specialty-wrap">
						<select>
							<option value="0" selected disabled>Specialty</option>
							<option value="1">Family Medicine</option>
							<option value="2">Mental Health</option>
							<option value="3">Dermatology And Cosmetology</option>
							<option value="4">Neurology</option>
							<option value="5">Gynecology</option>
							<option value="6">Nutrition And Dietetics</option>
							<option value="7">Laboratory Medicine</option>
							<option value="8">Ear Nose Throat Head And Neck Surgery</option>
							<option value="9">General Surgery</option>
							<option value="10">Anaesthesia</option>
							<option value="11">Cardiology - Interventional</option>
						</select>
            </p>
            <p class="col-md-6 language-wrap"> 
						<select>
							<option value="0" selected disabled>Language</option>
							<option value="1">English</option>
						</select>
               <span class="extern-type" style={{color:'#dcdcdc',fontWeight:'bolder'}}>Proficient languages.</span>
					</p>
          <p class="col-md-6"><input type="text" placeholder="Medical College" required /><span class="extern-type" />

          </p>
          
          <p class="col-md-6"><input type="text" placeholder="Medical ID" required /></p>
          
          {/* <p class="col-md-4"><input type="text" placeholder="PayPal username" required /></p> */}
          
          
          <p class="col-md-6"><form>
            <p style={{color:'#dcdcdc',fontWeight:'bolder'}}>Upload your medical ID:</p>
              <input type="file" name="fileToUpload" id="fileToUpload" style={{color:'#dcdcdc',fontWeight:'bolder'}} />
              <input type="submit" value="Upload Image" name="submit" required style={{float:'left',marginTop:'10px',backgroundColor:'#dcdcdc',color:'#1c55ac'}} />
              </form>
           </p>

          
          
          <p class="col-md-6"><form >
           <p style={{color:'#dcdcdc',fontWeight:'bolder'}}> Upload your personal photo:</p>
              <input type="file" name="fileToUpload" id="fileToUpload" style={{color:'#dcdcdc',fontWeight:'bolder'}} />
              <input type="submit" value="Upload Image" name="submit" required style={{float:'left',marginTop:'10px',backgroundColor:'#dcdcdc',color:'#1c55ac'}}/> 
              {/* <span class="extern-type">Professional clothing required.</span> */}
              </form>
           </p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Facebook profile link" required /></p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Linkedin profile link" required /></p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Twitter username" required /></p>
          
          <p class="col-xs-6"><input type="text" placeholder="Enter your Instagram username" required /></p>
          
        </div>
        	<p class="register-toggle">
					<label for="register-agree" class="toggle-label" data-on="YES" data-off="NO">
						<input type="checkbox" id="register-agree" class="toggle-input" />
						<span class="toggle-handle"></span>
					</label>
					<span class="info" style={{color:'#dcdcdc',fontWeight:'bolder'}}>Do you agree to the <a href="#" style={{color:'#dcdcdc',fontWeight:'bolder'}}>terms and conditions?</a></span>
				</p>
				<p class="register-submit"><input type="submit" value="Register Now" style={{marginTop:'50px',color:'#1c55ac'}}/></p>
			</form>
		</div>
        
        </div>
        
    )
}

export default TrialDoctorLoginRegister