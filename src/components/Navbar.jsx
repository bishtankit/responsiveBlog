import { Link } from "react-router-dom";
import { useEffect } from "react";

function Navbar({ page }) {


useEffect(()=>{

  const current = document.getElementById(`#${page}`)
  current.classList.add('current-page');
  const listItems = document.getElementsByTagName('a');
  for(let i=0; i<listItems.length; i++){

    if( listItems[i].getAttribute('id') != `#${page}` ){
    listItems[i].classList.remove('current-page');
    }

  }

}, [])





  return(
    <>
    {/* NAV BAR ------------------------*/}

    <div className="navbar">
    <div>
    <h1>Living the simple life</h1>
    <p>this a normal paragraph text</p>
    </div>

    <nav>
    <ul>
    <li> <Link to="/" id='#home'> HOME </Link> </li>
    <li> <Link to="/about" id='#about'> ABOUT ME </Link> </li>
    <li> <Link to="#" id='#recent'> RECENT POSTS </Link> </li>
    </ul>
    </nav>
    </div> {/* navbar end ------------*/}
    </>
  )

}

export default Navbar;
