import React from 'react';

function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black-100 p-4">
      <div className="max-w-6xl w-full bg-black shadow-md rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        
        <div className="text-lg text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Address:</span> Medical Square, Nagpur, Maharashtra, 440003
          </p>
          <p className="mb-2">
            <span className="font-semibold text-blue-600">Mobile No:</span> 9503007527 / 9403452788
          </p>
        </div>
        
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.655133472135!2d79.08494011493199!3d21.146633985926506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07db9ae8b8f%3A0x68b7f4b8d3b5e1b0!2sMedical%20Square%2C%20Nagpur%2C%20Maharashtra%20440003!5e0!3m2!1sen!2sin!4v1622623205195!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        <div className="text-lg text-gray-700 mb-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
