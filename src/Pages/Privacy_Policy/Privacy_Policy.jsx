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
    <meta name="description" content="Read the Privacy Policy of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services. Protecting your privacy is our priority. Learn about ghost writing agency, ghost writing AI, ghost writing app, ghost writing a book, ghost writing and publishing, book publishers in Austin Texas and Arkansas, Barnes and Noble, IngramSpark, book marketing services, books a million coupon, book promotion services, book writer AI, and more." />
    <meta name="keywords" content="privacy policy, thereadsy, book publishing, book marketing, writing services, ghostwriting, book cover design, ghost writing agency, ghost writing AI, ghost writing app, ghost writing a book, ghost writing and publishing, book publishers Austin Texas, book publishers Arkansas, barnes and noble, ingramspark, book promotion services, book promotion companies, best book marketing services, promote my book, book depository coupon, promote your book, marketing your book, book marketing for self published authors, promote book, book marketing packages, book promotion websites, amazon book promotion, free book promotion sites, ebook promotion, market your book, book promotion packages, book write AI, book and writer name in English, book and writer, book author bio, book author biography, book black author, book writer corner reviews, book writer called, colleen book writer, book author description, book cover AI generator, book cover art, book cover blank template, readsy" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Privacy Policy - The Readsy" />
    <meta property="og:description" content="Read the Privacy Policy of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services. Protecting your privacy is our priority." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://thereadsy.com/Privacy-Policy" /> 
    <meta property="og:image" content="https://thereadsy.com/static/media/logo%20white%20(1).0a54eda6b8aceb6f2ccc175d8a2f8ffe.svg" /> 
    <meta name="twitter:title" content="Privacy Policy - The Readsy" />
    <meta name="twitter:description" content="Read the Privacy Policy of The Readsy, a leading provider of book publishing, marketing, editing, ghostwriting, and cover design services. Protecting your privacy is our priority." />
    <meta name="twitter:image" content="https://thereadsy.com/static/media/logo%20white%20(1).0a54eda6b8aceb6f2ccc175d8a2f8ffe.svg" />
</Helmet>

       <MegaMenu/>
       <Policies/>
       <Text_Form/>
       <Footer/>
    </>
  )
}

export default Privacy_Policy