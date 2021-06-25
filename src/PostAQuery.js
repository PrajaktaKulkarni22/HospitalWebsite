import { Link } from 'react-router-dom'

function PostAQuery(){
    return(
        
            <div>
                <div class="navbar">
          <button type="button" id="phonenobtn1">
            <img
              id="callicon"
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
                <h3 id="aboutus" style={{marginTop:'20px'}}>About Us</h3>
                <Link to="/" id="homelink"><h3>Home  <span id="greaterthan"> {'>'} </span></h3> </Link>
                <h3 id="abouttext">About Us</h3>
            </div>
                <div id="postaquery-background">
                    <img src="https://dev.dropinternational.org/wp-content/uploads/2017/08/Telemedicine-1920x1080.jpg" id="image-postaquery" />
                    
                    
                </div>


            </div>
        
    )
} 
export default PostAQuery