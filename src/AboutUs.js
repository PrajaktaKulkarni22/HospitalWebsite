import { Link } from 'react-router-dom'

function AboutUs(){
   const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    
      }

      if(true) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }

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
            <h3 id="aboutus">About Us</h3>
            <Link to="/" id="homelink"><h3>Home  <span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext">About Us</h3>
        </div>

        <div class="Side-Toggle-Bar" id="Side-Toggle-Bar">

          <div class="dropdown">

            <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={myFunction} id="dropbtn" class="dropbtn" />
            <div id="myDropdown" class="dropdown-content">
           
              <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
              <Link to="#" id="aboutuss">ABOUT US</Link>
              <Link to="#" id="speciality">SPECIALITY</Link>
              <Link to="#" id="pathology" >PATHOLOGY</Link>
              <Link to="#" id="consultation">CONSULTATION</Link>
            </div>
          </div>
        </div>

        <section className="first">
        <div>
            <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/internationalpatientcare.jpg" style={{height: '480px', width: '650px'}} alt="pic1"/>
        </div>

            <div style={{padding:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
              </div>

                
        </section>
    <section class="second">
        <div style={{padding:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
                </div>

                <div>
                    <img src="http://www.sevenhillshospital.com/images/medium/sevenhills-consultants.jpg" style={{height: '520px', width: '698px',marginTop:'-30px'}} alt="pic1"/>
                </div>                
    </section>

    <section className="first" style={{marginTop:'5px'}}>
        <div >
            <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/internationalpatientcare.jpg" style={{height: '510px', width: '650px',marginTop:'-5px'}} alt="pic1"/>
        </div>

            <div style={{padding:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
              </div>

                
        </section>
    <section class="second">
        <div style={{padding:'20px'}}>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
                </div>

                <div>
                    <img src="http://www.sevenhillshospital.com/images/medium/sevenhills-consultants.jpg" style={{height: '500px', width: '698px',marginTop:'-30px'}} alt="pic1"/>
                </div>                
    </section>

    <div className="quality-assurance-image" id="quality-assurance-image">
      <img src="https://www.gccbusinessnews.com/filestorage/2020/07/GBN_E-Hospital_07072020.jpg" style={{height:'450px',width:'80%',marginTop:'50px'}}/>
    </div>

    <div className="quality-assurance-text">
        <h1>Quality Assurance</h1>
        <div style={{padding:'30px'}}> <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?</h3>
                </div>
    </div>
          </div>

    )

}
export default AboutUs