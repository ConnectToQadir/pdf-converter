import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Home() {
  const data = [
    {
      Heading_Number: "01",
      Title: "Word to Pdf",
      Connect: "/Wordtopdf"
    },
    {
      Heading_Number: "02",
      Title: "Excel to Pdf",
      Connect: "/exceltopdf"


    },
    {
      Heading_Number: "03",
      Title: "PowerPoint to Pdf",
      Connect: "/ppttopdf"

    },
    {
      Heading_Number: "04",
      Title: "Image to Pdf",
      Connect: "/imgtopdf"


    },
    {
      Heading_Number: "05",
      Title: "Text to Pdf",
      Connect: "/texttopdf"


    }


  ];
  return (
    <>
      <div className="row-heading">
        <div className="col-12 main-headings">
          <h2 className="heading-main">Edify College Of IT</h2>
          <h1 className="pdf-heding">PDF CONVERTER</h1>
        </div>
      </div>

      <div className="card-div justify-content-center mx-5">
        <div className="row container row-div  p-3 mt-5">
          {data.map((value, index) => {
            return (
              <>

                <div
                  className="p-4  mb-5 col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3 card-main-number"
                  key={index}
                >

                  <div
                    className="card"
                    style={{ width: "18rem", border: "none", height: "17rem" }}
                  >
                    <h1 className="number-heading">{value.Heading_Number}</h1>
                    <div className="card card-main pt-3 pb-3" style={{ width: "18rem", height: "22rem" }}>
                      <div className="border-gradient justify-content-center" style={{ width: "16rem", height: "21rem" }}>
                        <div className="card-body">
                          <h4 className="card-title">{value.Title}</h4>

                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card's content.
                          </p>

                          <Link href={value.Connect}><div className="circle-div ">
                            <div className="circle-chiled">

                            </div>
                          </div>
                          </Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
