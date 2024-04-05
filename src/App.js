import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Our_Portfolio from './Pages/Our_Portfolio/Our_Portfolio';
import Inner_Portfolio from './Pages/Our_Portfolio/Portfolio_inner';
import Pricing from './Pages/Pricing/Pricing';
import Book_Publising from './Pages/Book_Publishing/Book_Publising';
import Book_Marketing from './Pages/Book_Marketing/Book_Marketing';
import Book_Editing from './Pages/Book_Editing/Book_Editing';
import Ghost_Writing from './Pages/Ghost_Writing/Ghost_Writing';
import Book_Cover_Design from './Pages/BookCover_Design/BookCover_Design';
import ScrollToTop from './Components/Scroll_Top/ScrollTop';
import Privacy_Policy from './Pages/Privacy_Policy/Privacy_Policy';
import Terms_Condition from './Pages/Terms&Condition/Terms&Condition';
const App = () => {
  return (

<>
<BrowserRouter>

<Routes>

<Route
      path={"/"}
      element={
        <>
     <ScrollToTop/>
     <Home/>
        </>
      }
    />

<Route
      path={"/Contact"}
      element={
        <>
        <ScrollToTop/>
          <Contact />
        </>
      }
    />


<Route
      path={"/Our-Portfolio"}
      element={
        <>
        <ScrollToTop/>
          <Our_Portfolio />
        </>
      }
    />

<Route
      path={"/Inner-Gallery"}
      element={
        <>
        <ScrollToTop/>
          <Inner_Portfolio />
        </>
      }
    />

<Route
      path={"/Pricing"}
      element={
        <>
        <ScrollToTop/>
          <Pricing />
        </>
      }
    />

<Route
      path={"/Book-Publising"}
      element={
        <>
        <ScrollToTop/>
          <Book_Publising />
        </>
      }
    />

<Route
      path={"/Book_Marketing"}
      element={
        <>
        <ScrollToTop/>
          <Book_Marketing />
        </>
      }
    />
<Route
      path={"/book-marketing"}
      element={
        <>
        <ScrollToTop/>
          <Book_Marketing />
        </>
      }
    />

<Route
      path={"/Book_Editing"}
      element={
        <>
        <ScrollToTop/>
          <Book_Editing />
        </>
      }
    />


<Route
      path={"/terms-conditions"}
      element={
        <>
        <ScrollToTop/>
          <Terms_Condition />
        </>
      }
    />
<Route
      path={"/Ghost_Writing"}
      element={
        <>
        <ScrollToTop/>
          <Ghost_Writing />
        </>
      }
    />

<Route
      path={"/Book-Cover-Design"}
      element={
        <>
        <ScrollToTop/>
          <Book_Cover_Design />
        </>
      }
    />

<Route
      path={"*"}
      element={
        <>
        <ScrollToTop/>
          <Home />
        </>
      }
    />
<Route
      path={"/Privacy-Policy"}
      element={
        <>
        <ScrollToTop/>
          <Privacy_Policy />
        </>
      }
    />





</Routes>

</BrowserRouter>




</>

    )
}

export default App

