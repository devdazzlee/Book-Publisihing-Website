import React from 'react'
import Card from './Hover_Card'
import img1 from '../../Images/1.png'
import img2 from '../../Images/2card.png'
import img3 from '../../Images/card3.png'
import img4 from '../../Images/card4.png'
import img5 from '../../Images/card5.png'
import img6 from '../../Images/icon7.webp'
import img7 from '../../Images/icon8.webp'

const Cards_Flip = () => {
  return (
   <>
<h1  style={{"color" :"#141D29"}}  className='text-3xl md:text-5xl font-bold my-2 text-center' >Our Comprehensive Services Include</h1>
   
<div  className='flex justify-start md:items-start justify-center md:w-4/5  w-full m-auto my-12 flex-wrap	' >
<Card
        image={img1}
        frontHeading="Book Editing"
        backHeading="Book Editing"
        backParagraph="Once your ideas are on paper, you need an expert’s eye to look for the red flags. Book editing can be a tiresome and redundant process for which we have experts running the show. Thereadsy enhances your book’s vocabulary and sentence formations, in order to provide your readers a refined product."
      />
<Card
        image={img2}
        frontHeading="Book Writing"
        backHeading="Book Writing"
        backParagraph="From our writing approach to phrasing selection, we're all about creating riveting stories of any length or type. Let us handle your project from beginning to end with absolute finesse since, when you have professionals like us on your team, no responsibility is too huge."
      />
   
   <Card
        image={img3}
        frontHeading="Book Publishing Services"
        backHeading="Book Publishing Services"
        backParagraph="Thereadsy is one of the most preferred publishing agencies, specializing in book publishing on all platforms. Having assisted thousands of fiction/non-fiction writers become documented authors. We guarantee you a completely seamless publication process."
      />
<Card
        image={img4}
        frontHeading="Article Publication"
        backHeading="Article Publication"
        backParagraph="Content creation has always been an automated process to us. Writing blogs and Articles and publishing them is an easy task for us. Our job doesn’t end once we’re done publishing, we also share it on multiple online platforms in order to gain traction to your content."
      />
<Card
        image={img5}
        frontHeading="Children’s Book Publication"
        backHeading="Children’s Book Publication"
        backParagraph="Publishing children's books is no easy undertaking. Even though the book is only a little over 100 pages long, not everything appeals to these tiny beings. It takes several rewrites and re-drafts to concisely express an idea with a clear message, and we are here to assist."
      />
<Card
        image={img4}
        frontHeading="E-Book Writing"
        backHeading="E-Book Writing"
        backParagraph="Stop getting lost in the mix with our remarkable book marketing services! We advertise and promote your book in the most efficient way possible, taking it from the back of the shelf to the top of the bestseller list. We are the marketing & promotion specialists for the books you require."
      />
   
   <Card
        image={img6}
        frontHeading="Children's Book Illustrations"
        backHeading="Children's Book Illustrations"
        backParagraph="Kids may be choosy and unfiltered when they want to be with the things that are offered to them! That does not mean they are impartial. They pick up the book and flip over the pages to evaluate whether the illustrations and designs appeal to them. Give them books they'll be eager to return to time and time again!"
      />
<Card
        image={img7}
        frontHeading="Book Marketing"
        backHeading="Book Marketing"
        backParagraph="Stop getting lost in the mix with our remarkable book marketing services! We advertise and promote your book in the most efficient way possible, taking it from the back of the shelf to the top of the bestseller list. We are the marketing & promotion specialists for the books you require."
      />


</div>




   </>
  )
}

export default Cards_Flip