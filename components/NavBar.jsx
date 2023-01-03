import { useState } from "react";

import Link from "next/link";
import Image from "next/image"
const NavBar = () => {
    const [mobNavLinks, setMobNavLinks] = useState("");
const [Dropdown, setDropdown] = useState("")
  const navLinksToggle = () => {
    mobNavLinks === "none" ? setMobNavLinks("block") : setMobNavLinks("none");
  };
  const dropdowntoogel = () => {
    Dropdown === "none" ? setDropdown("block") : setDropdown("none");
  };
  return (
    
   <>
    <div className="NavBar">
      <nav>
        <div className="logo">
          <Link href="/">
            <Image className="width" width="200" height="70" src="/logo.png" alt="" />
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
            <div className="dropdown">
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
                <Link className="dropdown-item" href="/Wordtopdf">
                  Word to Pdf
                </Link>
                <Link className="dropdown-item" href="/exceltopdf">
                Excel to Pdf
                </Link>
                <Link className="dropdown-item" href="/ppttopdf">
                PowerPoint to Pdf
                </Link>
                <Link className="dropdown-item" href="/imgtopdf">
                Image to Pdf
                </Link>
                <Link className="dropdown-item" href="/texttopdf">
                Text to Pdf
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
              <Link href="/FAQ">FAQ's</Link>
              
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
   </>
  )
}

export default NavBar