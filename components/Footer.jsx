import React from 'react'
import Link from "next/link";
import Image from "next/image"
const Footer = () => {
  return (
    <>       
     
    <footer>
   <div className="content container">
     <div className="left-box mx-5">
     
       <div className="topic">Company</div>
       <div><Link className='footer-tag' href="#"> About Us</Link></div>
       <div><Link className='footer-tag' href="#">Contact Us</Link></div>
       <div><Link className='footer-tag' href="#">Privcy And Policy</Link></div>
       <div><Link className='footer-tag' href="#">Disclaimer</Link></div>
       <div><Link className='footer-tag' href="#">Blogs</Link></div>
     
     
       <div className="lower">
         <div className="topic">Contact us</div>
         <div className="phone">
           <Link className='footer-tag' href="#"><i className=" social-media-icons fas fa-phone-volume"></i>+92-346-7897340</Link>
         </div>
         <div className="email">
           <Link className='footer-tag' href="#"><i className="social-media-icons fas fa-envelope"></i>edifytech4u@gmail.com</Link>
         </div>
       </div>
     </div>
     <div className="middle box">
       <div className="topic">Our Services</div>
       <div><Link className='footer-tag' href="/Converter/TextBinary">Text To Binary</Link></div>
       <div><Link className='footer-tag' href="/Converter/Binary">Binary To Decimal</Link></div>
       <div><Link className='footer-tag' href="/Converter/">Hexa To Binary</Link></div>
       <div><Link className='footer-tag' href="#"></Link></div>
       <div><Link className='footer-tag' href="#"></Link></div>
       <div><Link className='footer-tag' href="#"></Link></div>
     </div>
     <div className="right box">
       <div className="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send"/>
         <div className="media-icons">
           <Link href="#"><i className="fab fa-facebook-f social-media-icons"></i></Link>
           <Link href="#"><i className="fab fa-instagram social-media-icons"></i></Link>
           <Link href="#"><i className="fab fa-twitter social-media-icons"></i></Link>
           <Link href="#"><i className="fab fa-youtube social-media-icons"></i></Link>
           <Link href="#"><i className="fab fa-linkedin-in social-media-icons"></i></Link>
         </div>
       </form>
     </div>
   </div>
   <div className="bottom">
     <p>Copyright © 2020 <a href="#">Edify</a> All rights reserved</p>
   </div>
 </footer>
    </>
  )
}

export default Footer