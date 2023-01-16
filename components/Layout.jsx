
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <>
    <NavBar></NavBar>
    {children}

    <Footer></Footer>
    </>
  )
}

export default Layout