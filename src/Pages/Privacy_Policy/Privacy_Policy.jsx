import React from 'react'
import MegaMenu from '../../Components/Navbar/Navbar'
import Policies from '../../Components/Privacy/Privacy'
import Text_Form from '../../Components/Text_Form/Text_Form'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet';

const Privacy_Policy = () => {
  return (
    <>
             <Helmet>
        <title>Privacy Policy - The Readsy</title>
        <meta name="description" content="Read the Privacy Policy of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services. Protecting your privacy is our priority." />
        <meta name="keywords" content="privacy policy, thereadsy, book publishing, book marketing, writing services, ghostwriting, book cover design" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Privacy Policy - The Readsy" />
        <meta property="og:description" content="Read the Privacy Policy of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services. Protecting your privacy is our priority." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.linkedin.com/posts/thereadsy_bookhelp-authorsupport-writingcommunity-activity-7179734105700397057-pbqo?utm_source=share&utm_medium=member_desktop" />
        <meta property="og:image" content="https://www.linkedin.com/posts/thereadsy_bookprinting-bookwriting-ebookpublishing-activity-7173935977873186817-csX2?utm_source=share&utm_medium=member_desktop" />
        <meta name="twitter:title" content="Privacy Policy - The Readsy" />
        <meta name="twitter:description" content="Read the Privacy Policy of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services. Protecting your privacy is our priority." />
        <meta name="twitter:image" content="https://www.linkedin.com/posts/thereadsy_bookhelp-authorsupport-writingcommunity-activity-7179734105700397057-pbqo?utm_source=share&utm_medium=member_desktop" />
      </Helmet>
       <MegaMenu/>
       <Policies/>
       <Text_Form/>
       <Footer/>
    </>
  )
}

export default Privacy_Policy