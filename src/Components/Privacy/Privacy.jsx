import React from 'react';

const Policies = () => {
  return (
    <div className="container mx-auto pt-40 bg-white  rounded-lg">
      <h1 className="text-4xl mb-6 font-bold text-gray-800">Privacy Policy</h1>

      <h2 className="text-2xl mb-4 font-semibold text-gray-700">The Information that we collect from you</h2>
      <p className="mb-4 text-gray-600">
        You share your information with us when you register with us through our website, at the time of placing an order, when
        you fill out a form, or when you subscribe to our newsletter.
      </p>
      <p className="mb-4 text-gray-600">
        The information that you will typically be sharing with us may include your name, e-mail address, mailing address,
        phone number, or credit card information. We, however, also provide the option to visit our site as an anonymous visitor.
      </p>

      <h2 className="text-2xl mb-4 font-semibold text-gray-700">Why do we need your information?</h2>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">We may use your information for the specified below purposes:</h3>
      <ul className="list-disc pl-8 mb-4 text-gray-600">
        <li>The information we collect helps us better serve your individual needs.</li>
        <li>Based on the information and feedback we receive from you, we continually strive to improve our website offerings.</li>
        <li>To enable us effectively respond to your customer service requests and support needs.</li>
        <li>
          To use your provided email address to send you information, respond to inquiries, and/or other requests or questions.
        </li>
        <li>
          We assure you that your provided information (public or private) will not be sold, exchanged, transferred, or given to
          any other company for any reason whatsoever, without your consent, other than for the expressed purpose of delivering the
          purchased product or service requested.
        </li>
      </ul>

      <h2 className="text-2xl mb-4 font-semibold text-gray-700">Is your information protected?</h2>
      <p className="mb-4 text-gray-600">
        When you place an order or enter, submit, or access your personal information – at all levels, we have implemented security
        measures to maintain the safety of your personal information.
      </p>
      <p className="mb-4 text-gray-600">
        Through the use of SSL, we ensure the security and confidentiality of the information you share. After a transaction, your
        private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.
      </p>

      <h2 className="text-2xl mb-4 font-semibold text-gray-700">Why do we use cookies?</h2>
      <p className="mb-4 text-gray-600">
        In order to keep track of advertisements and compile aggregate data about site traffic and site interaction, we use cookies.
        This enables us to offer better site experiences and tools in the future.
      </p>
      <p className="mb-4 text-gray-600">
        If so required, we may seek services from third-party to assist us in better understanding our site visitors. However,
        third-party service providers are not allowed to use the information collected except for the expressed purpose of customer
        analysis.
      </p>

      <h2 className="text-2xl mb-4 font-semibold text-gray-700">We never share personally identifiable information with third parties</h2>
      <p className="mb-4 text-gray-600">
        The information that is personally identifiable is not sold, traded, or otherwise transferred to outside parties. This
        means you can be sure we will not distribute your personal information to outside parties without your consent. However,
        non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
      </p>

      <h2 className="text-2xl mb-4 font-semibold text-gray-700">Applicability of Privacy policy</h2>
      <p className="text-gray-600 pb-12">
        Our privacy policy does not apply to the information collected through offline media. This applies only to the information
        we collect through online channels.
      </p>
    </div>
  );
};

export default Policies;