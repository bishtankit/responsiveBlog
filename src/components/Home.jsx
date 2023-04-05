import Post from "./Post";
import furniture1 from "../images/furniture1.jpg";
import selfie1 from "../images/selfie1.jpg";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";

function Home() {

function handleSideNav() {

const sideNav = document.querySelector(".menu-div");
const button = document.querySelector("#hide-button");

if(sideNav.classList.contains('hidden')){
  sideNav.classList.remove('hidden');
  button.style.display = 'none';
}else{
  sideNav.classList.add('hidden');
  button.style.display = 'block';
}

}


return(
  <>
  <Navbar page='home'/>

  <i className="fa-solid fa-bars fa-lg" onClick={handleSideNav} id="hide-button" style={{paddingLeft: '0.2em'}}></i>

  <div className="menu-div hidden">
  <i className="fa-regular fa-circle-xmark fa-lg" onClick={handleSideNav}></i>
  <h3> Profile </h3>
  <h3> Blogs </h3>
  <h3> Explore </h3>
  <h3> Logout </h3>
  </div>

    <div className="container">
      <div className="left-container">
        <img src={furniture1} />
        <h2> Finding simplicity in life </h2>
        <p> Life can get complicated really quickly,
         but it doesn't have to be! There are many ways
         to simplify your life, a few of which we've explored
         in the past. This week we're taking a bit of a approach though,
         in how you can find simplicity in the life you already living. continue reading
         </p>
         <hr />
        <Post />
        <Post />
        <Post />
      </div>

      <div className="right-container">
         <div className="about-div">
            <h2> About me </h2>
            <img src={selfie1} />
            <p> I'm happy when things are easy and simple, just a simple engineer </p>
         </div>
      </div>
    </div> {/* Outer container---------------*/}

    <Footer />
  </>
)

}

export default Home;
