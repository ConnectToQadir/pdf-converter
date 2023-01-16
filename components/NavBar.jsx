import { useState ,useRef,useEffect} from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import Image from "next/image"
const NavBar = () => {
   const ref=useRef(null)

    const [mobNavLinks, setMobNavLinks] = useState("");
const [Dropdown, setDropdown] = useState("")
  const navLinksToggle = () => {
    mobNavLinks === "none" ? setMobNavLinks("block") : setMobNavLinks("none");
  };
  const dropdowntoogel = () => {
    // Dropdown === "none" ? setDropdown("block") : setDropdown("none");
  };
   
  useEffect(()=>{
    document.addEventListener('click' , handleclickoutside,true)
  },[])

  const refone= ref;
   const handleclickoutside=(e)=>{
    if(!refone.current.contains(e.target)){
      // setMobNavLinks("none")
      setDropdown("none")
    }else{
      // setMobNavLinks("block")
      setDropdown("block")
    }
   } 
  return (
    
   <>
    <div className="NavBar">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image className="width" width="200" height="70" src="/logos.png" alt="" />
          </Link>
        </div>
        <div className="barsDiv" onClick={navLinksToggle}>
          <div className="bars">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navLinks" style={{ display: mobNavLinks }}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
             
            </li>
            <div className="dropdown"
             ref={refone}
             >
              <button
                className="dropdown-toggle"
               
                onClick={dropdowntoogel}
              >
               Services
              </button>
              <div
                className="dropdown-menu"
              
                style={{ display: Dropdown }}
              >
                <Link className="dropdown-item" href="/Converter/Binary">
                  Binary To Decimal
                </Link>
                <Link className="dropdown-item" href="/Converter/TextBinary">
                Text to Binary
                </Link>
                <Link className="dropdown-item" href="/Converter/Hexatobinary">
                Hexa to Binary
                </Link>
                
                
              </div>
            </div>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/Contactus">Contact Us</Link>
            </li>
            <li>
              <Link href="/Privacy">Privacy And Policy</Link>
            </li>
            
            <li>
            <Link href="/Disclaimer">Disclaimer</Link>
            </li>
            <li>
              <Link href="/Blogs">Blogs</Link>
              
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
   </>
  )
}

export default NavBar