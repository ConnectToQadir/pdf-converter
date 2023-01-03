import React from 'react'
import Link from "next/link";
import Image from "next/image"
const Footer = () => {
  return (
    <>
   <div className="row">
   <div className="col-12 map-div">
    <iframe
                      title='map1'
                      className="gmap_iframe me-5"
                      width="100%"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      height="150px"
                      src="https://maps.google.com/maps?width=600&height=500&hl=en&q=edify group of companies&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    />
            </div>
   </div>
            
     <div className="foot">
      {/* <!-- newsletter --> */}
      
      {/* <!-- footer content --> */}
      <div className="footer bg-footer section border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mb-5 mb-lg-0">
              {/* <!-- logo --> */}
              <a className="logo-footer" href="index.html"> <h4>DARASGAH</h4></a>
              <ul className="list-unstyled">
                <li className="mb-2">
                3rd Floor, Edify Building, S1/S2, Susan Road, Madina Town, Faisalabad
                </li>
                <li className="mb-2">+1 (2) 345 6789</li>
                <li className="mb-2">+1 (2) 345 6789</li>
                <li className="mb-2">
                  <i className="fa-brands fa-facebook p-3"></i>
                  <i className="fa-brands fa-instagram p-3"></i>
                  <i className="fa-brands fa-linkedin p-3"></i>
                </li>
              </ul>
              <div className="row">
            
          </div>
            </div>
            {/* <!-- company --> */}
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
              <h4 className="text-white mb-5">COMPANY</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link className="text-color" href="/aboutus">About Us</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-color" href="/contactus">Contact Us</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-color" href="/privacy">Privacy And Policy</Link>
                </li>
                <li className="mb-3">
                  <Link className="text-color" href="/FAQ">FAQ's</Link>
                </li>
              </ul>
            </div>
            {/* <!-- links --> */}
            <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
              <h4 className="text-white mb-5">Tools</h4>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a className="text-color" href="/wordtopdf">  Word to Pdf</a>
                </li>
                <li className="mb-3">
                  <a className="text-color" href="/exceltopdf">Excel to Pdf</a>
                </li>
                <li className="mb-3">
                  <a className="text-color" href="/ppttopdf"> PowerPoint to Pdf</a>
                </li>
                <li className="mb-3">
                  <a className="text-color" href="/texttopdf">Text to Pdf</a>
                </li>
              </ul>
            </div>
        
           
            
          </div>
        </div>
      </div>
      {/* <!-- copyright --> */}
      <div className="copyright py-4 bg-footer">
        <div className="container">
            <div className="text-center w-100">
              <p className="mb-0 text-light">
                Copyright
                <script>
                  var CurrentYear = new Date().getFullYear();
                  document.write(CurrentYear);
                </script>
                Â© themefisher
              </p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer