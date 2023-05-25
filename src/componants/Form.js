import React from 'react'

const Form = () => {
  return (
    <section className="pt-12 pb-12 bg-red-50">
      <div className="container flex items-center justify-center p-6 mx-auto bg-white shadow-lg sm:p-12 md:w-1/2">
        <div className="w-full">
          <h1 className="mb-4 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Order Now FREE AND FAST
          </h1>
          <div className="gap-2 mb-8 lg:flex">
            <div className="w-full">
              <label className="block text-base">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full">
              <label className="block text-base">Your Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Your Number"
              />
            </div>
          </div>
          <div className="gap-2 mb-8 lg:flex">
            <div className="w-full">
              <label className="block text-base">Table Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Enter Table Number 1 to 12"
              />
            </div>
            <div className="w-full">
              <label className="block text-base">Booking Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
                placeholder="Your Number"
              />
            </div>
          </div>
          <div className="">
            <label className="block text-base">Your Message</label>
            <textarea
              name=""
              id=""
              rows="8"
              cols="30"
              className="w-full p-3 text-base border rounded-md focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholder=""
            ></textarea>
          </div>
          <button
            className="px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green"
            href="#"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Form
