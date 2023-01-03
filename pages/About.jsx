
// import EachPageBanner from "../../EachPageBanner/EachPageBanner";
// import {Link} from 'react-router-dom'
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* <EachPageBanner Heading="About Us" bgImg="aboutBanner" /> */}
      <div className="about-section">
        <h1>About Us </h1>
        {/* <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p> */}
      </div>

      <div className="About">
        <div className="actualAbout padMain">
          <div className="innerpadmain">
            <div className="row">
              <div
                
                className="col-xl-6 col-md-6 col-lg-6 col-sm-12 aboutLeftContentSection"
              >
                <p className="folwh">Our Story</p>
                <h2 className="flwh">
                  Our Mission is to Provide a World‑className Education.
                </h2>
                <p className="flwp ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quisquam eveniet corrupti vel totam blanditiis quidem, et, officiis repellendus sunt voluptates provident laboriosam ipsa rerum deleniti error libero? Dolorum, animi.
                </p>
              </div>
              <div
                
                className="col-xl-6 col-md-6 col-lg-6 col-sm-12 videoSection"
              >
                <div className="innerVideoSection">
                  <div className="overlay">
                    <button
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      className="videoPlayBtn"
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="flwp text-justify mt-5">
                  At {" "}
                  <strong style={{ color: "var(--blueClr)" }}>
                    {/* <Link  to="/">
                  Edify College of IT
                  </Link> */}
                  </strong>
                  , we offer various training programs that introduce students to
                  the world of information technology so they can better
                  understand which job role within the sector suits them best. Our
                  college is located in Faisalabad Pakistan and provides some of
                  the best facilities for aspiring IT professionals. The
                  <strong> Edify</strong> college of IT offers a variety of IT
                  courses that are designed to give students the skills and
                  knowledge they need to succeed in today's competitive market.
                  The courses are taught by experienced industry professionals who
                  have a wealth of experience to share with <strong>Edify</strong>{" "}
                  students. The college's focus on giving its students the best
                  possible education has made it a top choice for those seeking a
                  career in IT. With its excellent facilities and highly qualified
                  staff, <strong>Edify</strong> College of IT is the perfect place
                  to get the magnificent skills for student's future.{" "}
                  <strong>Edify</strong> College of IT's dedication to its
                  students does not stop after they graduate. The college has an
                  active career services department that helps graduates find jobs
                  in their chosen fields. <strong>Edify </strong>
                  College of IT is also a Platinum member of the British Council,
                  which gives its graduates access to job postings and internships
                  from around the country. The <strong>Edify</strong> college of
                  IT offers several different benefits to its students. These
                  benefits include:
                  <br />
                  <br />
                  <ul style={{ listStylePosition: "inside" }}>
                    <li>A variety of IT courses to choose from</li>
                    <li>Taught by experienced industry professionals</li>
                    <li>Excellent facilities and qualified staff</li>
                    <li>
                      Career services department to help graduates find jobs
                    </li>
                    <li>A platinum member of the British Council</li>
                  </ul>
                  If you are looking for the best IT education Center that
                  Faisalabad has to offer, look no further than{" "}
                  <strong>Edify</strong> College of IT. With its commitment to its
                  students and dedication to providing them with the best possible
                  education, <strong>Edify</strong> College of IT is the perfect
                  choice for those seeking a career in IT.
                </p>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="row-about">
              <div className="column">
                <div className="card-about">
                  <div className="author-info">
                  <Image className="width" width="200" height="70" src="/image.png" alt="" />

                  <div className="author-links">
                   <a className='links'  href=""><i  className="fa-brands fa-facebook"></i> </a>
                   <a  className='links'  href=""><i className="fa-brands fa-twitter"></i></a>
                   <a  className='thirdlinks'  href=""><i className="fab fa-instagram"></i> </a>
                   <a  className='thirdlinks'  href=""><i class="fab fa-youtube"></i> </a>
                  </div>
                  </div>
                  <div style={{margin:'20px'}} className="container">
                    <h2>Jane Doe</h2>
                    <p className="title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                   
                    <p>example@example.com</p>

                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>


        

        {/*====================== VideoModel=========================== */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/dPm7vve6Q-0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
