import React from 'react'
import './Form.css'




const Conact_Form = () => {
  return (
<section   class="   bg-white ">
  <div  class="bx-shadow-form py-8 my-12   lg:py-16 px-4 mx-auto max-w-screen-lg">
      <h2 class="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900   ">Fill Out The Form Below We Will Contact You Promptly</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8  w-8/12 m-auto">
          <div  >
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900   ">Name</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Name" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900   ">Email</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Email" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900   ">Phone Number</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Phone Number" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900   ">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className='text-center' >

          <button type="submit" class=" py-3 px-12 text-sm font-medium text-center text-white rounded-lg bg-cyan-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 ">Submit</button>
          </div>
      </form>
  </div>
</section>
  )
}

export default Conact_Form