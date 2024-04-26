import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Text_Form from '../../Components/Text_Form/Text_Form'
import Footer from '../../Components/Footer/Footer'
import Terms from '../../Components/Terms/Terms'
import { Helmet } from 'react-helmet'

const Terms_Condition = () => {
  return (
    
<>
<Helmet>
        <title>Terms and Conditions - The Readsy</title>
        <meta name="description" content="Read the terms and conditions of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services for authors and publishers." />
        <meta name="keywords" content="terms and conditions, thereadsy, book publishing, book marketing, book editing, ghostwriting, cover design" />
      </Helmet>

<MegaMenu/>
<Terms/>
<Text_Form/>
<Footer/>
</>
  )
}

export default Terms_Condition