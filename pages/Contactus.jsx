import React from 'react'
import Link from 'next/link'
const Contactus = () => {
  return (
    <>
     <div>
      <div className="body">
        <div className='firstcard'>

          <h4>join us our team</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quidem minus accusantium? Labore, deserunt, blanditiis exercitationem, esse repellendus ea quidem non excepturi aliquam ipsum quaerat quam? Repellendus, sunt dignissimos.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum quidem minus accusantium? Labore, deserunt, blanditiis exercitationem, esse repellendus ea quidem non excepturi aliquam ipsum quaerat quam? Repellendus, sunt dignissimos.</p>
          <p>location</p>
          <p>office timming</p>
          <p>office timming</p>
          <a className='edifylink' href="www.edifycit.com">www.edifycit.com</a>

          <h3>follow us </h3>
          <div className='icons'></div>
          <a className='links'  href=""><i  className="fa-brands fa-facebook"></i> </a>
        <a  className='links'  href=""><i className="fa-brands fa-twitter"></i></a> 
         <a  className='thirdlinks'  href=""><i className="fab fa-instagram"></i> </a>
        
          <div className='policy'>
          {/* <Link to="/privacy">privacy policy</Link> */}
          </div>
        </div>

        <div className='secondcard'>

          <form>
            


            <input type="text" placeholder="enter your name"  />


            <input type="email" placeholder="enter your valid email"  /><br />
            <textarea name="comment"  cols="20" rows="7" placeholder='comment'></textarea>
            <br />
            <button className='btn'>submit </button>

          </form>

        </div>

      </div>
    </div>
    
    </>
  )
}

export default Contactus