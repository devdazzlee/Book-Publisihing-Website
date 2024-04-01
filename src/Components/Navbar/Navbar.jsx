
import React, { useState } from 'react';
import "./Navbar.css"; // CSS for styling
import img1 from '../../Images/updatedAsset 9.svg'
import { Link  , useNavigate } from 'react-router-dom';
import logo from '../../Images/logo black (1).svg'


const MegaMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
  
  const navigate = useNavigate()
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(prevState => !prevState);
    };
    const handleClick = () => {
      window.location.href = 'tel:+17373591874';
    };
  
  
    function handleClick23() {
      navigate("/Contact");
    }
  
    return (
      <nav 
      style={{
        position: 'fixed',
        zIndex: '100',
      }}
      className="navbar nav-with-shadow bg-white border-gray-200 py-4">
        <div className="navbar-container">
     <Link  to={"/"} >
  
  
     <img  className='h-16 md:mx-12 mx-4'  src={logo} alt="" />
  
        
        
        </Link>
  
          <div className="navbar-hamburger" onClick={toggleMobileMenu}>
            ☰
          </div>
  
          <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
  
          <Link itemprop="availability" href="https://schema.org/InStock"
                className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
                to={'/'}
              >
                Home
              </Link>
            <li className="with-dropdown">
            <Link itemprop="availability" href="https://schema.org/InStock"
                className="block py-2 pl-3 pr-4 text-white rounded  md:p-0   "
                to={'/'}
              >
                Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
              
              <ul className="dropdown">
  
  <li  className="nested-dropdown-container"  >
        
  <Link style={{"color" :"white"}} to={"/Book_Marketing"} >
 Book Marketing  
  </Link>
       
  </li>
  
                <li  className="nested-dropdown-container"  >
                  <Link style={{"color" :"white"}}  to={"/Book-Publising"} >
                Book Publising 
                  </Link>
  </li>
  <li  className="nested-dropdown-container"  >
                  <Link  style={{"color" :"white"}}  to={"/Book_Editing"} >
                Book Editing 
                  </Link>
  </li>
  <li  className="nested-dropdown-container"  >
                  <Link style={{"color" :"white"}}   to={"/Ghost_Writing"} >
              Ghost Writing 
                  </Link>
  </li>
  <li  className="nested-dropdown-container"  >
                  <Link style={{"color" :"white"}}   to={"/Book-Cover-Design"} >
             Book Cover Design
                  </Link>
  </li>
  
  
              </ul>
            </li>
  <li   className='mb-dropdown' >
  
  
  <Link itemprop="availability" href="https://schema.org/InStock"
                className="block py-2 pl-3 pr-4 text-white rounded  md:p-0"
                onClick={()=>{
                  setDropdown(!dropdown)
                }}
              >
                Services  <i class="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
  {
    dropdown ? <>
    
   
  <li>
    <Link style={{"color" :"black"}} to={"/Book_Marketing"} >
 Book Marketing  
  </Link>
       
  </li>
  
                <li   className="block  py-2 pl-3 pr-4 text-white rounded  md:p-0"  >
                  <Link style={{"color" :"black"}}  to={"/Book-Publising"} >
                Book Publising 
                  </Link>
  </li>
  <li    >
                  <Link    className="block py-2 pl-3 pr-4 text-white rounded  md:p-0" style={{"color" :"black"}}  to={"/Book_Editing"} >
                Book Editing 
                  </Link>
  </li>
  <li   >
                  <Link   className="block py-2 pl-3 pr-4 text-white rounded  md:p-0" style={{"color" :"black"}}   to={"/Ghost_Writing"} >
              Ghost Writing 
                  </Link>
  </li>
  <li    >
                  <Link   className="block pt-2 pl-3 pr-4 text-white rounded  md:p-0" style={{"color" :"black"}}   to={"/Book-Cover-Design"} >
             Book Cover Design
                  </Link>
  </li>
  
  
  
  
    </> : ''
  
  }
  
  
  </li>
  
  
  
  
  
  
            <Link itemprop="availability" href="https://schema.org/InStock"
                className="block  pl-3 pr-4 text-white rounded  md:p-0"
                to={'/Pricing'}
              >
               Pricing
              </Link>
              <Link itemprop="availability" href="https://schema.org/InStock"
                className="block  pl-3 pr-4 text-white rounded  md:p-0"
                to={'/Our-Portfolio'}
              >
                
Portfolio
              </Link>
        
         
            <li>
             <Link itemprop="availability" href="https://schema.org/InStock"
                className="block  text-white rounded  md:p-0   "
                to={'/Contact'}
              >
                Contact Us
              </Link>
            
            </li>
  
  
        <button
          style={{ background: "#232F3F" }}
          className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
          itemscope
          itemtype="http://schema.org/Button"
          onClick={handleClick}
        >
          <span itemprop="name"> +1 737-222-7373</span>
        </button>
  {/* <Link   to={'/Contact-us'} >  */}
  <button
  onClick={handleClick23}
    style={{ background: "#232F3F" }}
    className="w-full md:w-auto text-white font-bold py-2 px-4 rounded-full custom-button"
    itemscope
    itemtype="http://schema.org/Button"
  >
    <span itemprop="name">Get A Quote</span>
  </button>
  {/* </Link> */}
          </ul>
        </div>
      </nav>
    );
  };
  
  export default MegaMenu;