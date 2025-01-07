import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-6">
      <div className="w-full max-w-4xl mb-8">

      </div>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl flex flex-col sm:flex-row gap-12 sm:gap-16">
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold text-center mb-6">Contact Us</h3>
          <div className="space-y-8">
            
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-teal-600">📞</span>
              <div>
                <p className="text-xl font-semibold text-gray-800">Call Us for Orders:</p>
                <a
                  href="tel:+1234567890"
                  className="text-teal-600 hover:text-teal-800 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-teal-600">📧</span>
              <div>
                <p className="text-xl font-semibold text-gray-800">Email Us for Inquiries:</p>
                <a
                  href="mailto:contact@foodwebsite.com"
                  className="text-teal-600 hover:text-teal-800 transition-colors duration-300"
                >
                  contact@foodwebsite.com
                </a>
              </div>
            </div>

            
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-teal-600">🏢</span>
              <div>
                <p className="text-xl font-semibold text-gray-800">Visit Our Restaurant:</p>
                <p className="text-gray-700">456 Gourmet Ave, Food City, Yummy State, 12345</p>
              </div>
            </div>

            
            <div className="flex items-center space-x-4">
              <span className="text-3xl text-teal-600">🕒</span>
              <div>
                <p className="text-xl font-semibold text-gray-800">Our Operating Hours:</p>
                <p className="text-gray-700">Monday - Sunday, 11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="w-full sm:w-1/2">
          <h3 className="text-2xl font-bold text-center mb-6">Send Us a Message</h3>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
